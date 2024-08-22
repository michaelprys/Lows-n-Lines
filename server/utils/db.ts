import pg from "pg";
const { Pool } = pg;

const { databaseUrl } = useRuntimeConfig();

export const pool = new Pool({
  connectionString: databaseUrl,
});
