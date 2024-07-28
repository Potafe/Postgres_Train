#! /usr/bin/env node

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS usernames (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 )
);

INSERT INTO usernames (username) 
VALUES
  ('Himantika'),
  ('Rakesh'),
  ('Naisha');
`;

async function main() {
  const connectionString = process.argv[2];

  if (!connectionString) {
    console.error("Please provide a connection string as an argument");
    process.exit(1);
  }

  console.log("seeding...");
  const client = new Client({ connectionString });
  try {
    await client.connect();
    await client.query(SQL);
    console.log("done");
  } catch (err) {
    console.error("Error seeding database:", err);
  } finally {
    await client.end();
  }
}

main();
