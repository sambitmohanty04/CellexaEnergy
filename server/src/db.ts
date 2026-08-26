import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pg;

const {
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
} = process.env;

console.log("DB HOST:", DB_HOST);
console.log("DB PORT:", DB_PORT);
console.log("DB USER:", DB_USER);
console.log("DB NAME:", DB_NAME);
console.log("PASSWORD EXISTS:", Boolean(DB_PASSWORD));

if (!DB_HOST) {
  throw new Error("DB_HOST environment variable is not configured");
}

if (!DB_USER) {
  throw new Error("DB_USER environment variable is not configured");
}

if (!DB_PASSWORD) {
  throw new Error("DB_PASSWORD environment variable is not configured");
}

if (!DB_NAME) {
  throw new Error("DB_NAME environment variable is not configured");
}

const pool = new Pool({
  host: DB_HOST,
  port: Number(DB_PORT || 5432),
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  ssl: {
    rejectUnauthorized: false,
  },
});

pool.on("error", (err) => {
  console.error("Unexpected PostgreSQL error:", err);
});

export default pool;
