const pool = require("./pool");

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

async function getSelectedUsernames(search) {
  let query = "SELECT * FROM usernames";
  const values = [];

  if (search) {
    query += " WHERE username LIKE $1";
    values.push(`%${search}%`);
  }

  const { rows } = await pool.query(query, values);
  return rows;  
}

async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

async function deleteAllUsernames() {
  await pool.query("DELETE FROM usernames");
}

module.exports = {
  getAllUsernames,
  insertUsername,
  deleteAllUsernames,
  getSelectedUsernames
};
