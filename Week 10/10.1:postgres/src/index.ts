import { Client } from "pg";

const client = new Client({
  connectionString:
    "postgresql://habeelshamsudeen9895:4yxA6kgfvHKp@ep-plain-bush-41774063.us-east-2.aws.neon.tech/test?sslmode=require",
});

async function createUserTable() {
  try {
    await client.connect();
    const result = await client.query(`
            SELECT *FROM users;
        `);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

createUserTable();
