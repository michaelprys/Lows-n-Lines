import pg from "pg";
import argon2 from "argon2";

const { Pool } = pg;
const config = useRuntimeConfig();

const pool = new Pool({
  connectionString: config.databaseUrl,
});

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (event.method === "POST") {
    const { firstname, lastname, email, password, member_since } = body;
    const conn = await pool.connect();

    try {
      const hashedPassword = await argon2.hash(password);

      await conn.query(
        "INSERT INTO users (firstname, lastname, email, password, member_since) VALUES ($1, $2, $3, $4, $5)",
        [firstname, lastname, email, hashedPassword, member_since],
      );
      setResponseStatus(event, 201, "User created successfully");
    } catch (err) {
      if (err.code === "23505") {
        throw createError({
          statusCode: 409,
          statusMessage: "User already exists",
        });
      }
      console.error("Error during user registration:", err);
      throw createError({
        statusCode: 500,
        statusMessage: `Server error ${err.message}`,
      });
    } finally {
      conn.release();
    }
  } else {
    throw createError({
      statusCode: 405,
      statusMessage: "Method Not Allowed",
    });
  }
});
