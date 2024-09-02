import { pool } from "~~/server/utils/db";
import { MessageSchema } from "~/utils/schemas";
import { safeParse } from "valibot";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const validation = safeParse(MessageSchema, body);
  if (!validation.success) {
    throw createError({
      statusCode: 400,
      statusMessage: "Validation error",
      message: `Validation error: ${validation.issues.map((issue, idx) => `${idx + 1}. ${issue.message}`).join(", ")}`,
    });
  }

  const { firstname, lastname, phoneNumber, email, message } = body;
  const conn = await pool.connect();

  try {
    await conn.query(
      "INSERT INTO users (firstname, lastname, phoneNumber, email, message) VALUES ($1, $2, $3, $4, $5)",
      [firstname, lastname, phoneNumber, email, message],
    );
    setResponseStatus(event, 200, "Massage was sent");
  } catch (err) {
    throw createError({
      statusCode: 500,
      statusMessage: `Server error ${err.message}`,
    });
  } finally {
    conn.release();
  }
});
