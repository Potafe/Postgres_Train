const asyncHandler = require("express-async-handler");
const db = require("../db/queries");

exports.getUsernames = asyncHandler(async function (req, res) {
  const usernames = await db.getAllUsernames();
  console.log("Usernames: ", usernames);
  res.send("Usernames: " + usernames.map(user => user.username).join(", "));
});

exports.createUsernameGet = asyncHandler(async function (req, res) {
  // render the form
  res.render("form");
});

exports.createUsernamePost = asyncHandler(async function (req, res) {
  const { username } = req.body;
  console.log(username);
  await db.insertUsername(username);
  res.redirect("/");
});

exports.deleteAllUsersGet = asyncHandler(async function (req, res) {
  await db.deleteAllUsernames();
  res.redirect("/");
});

exports.getSelectedUsers = asyncHandler(async function (req, res) {
  const search = req.query.search || "";
  const usernames = await db.getSelectedUsernames(search);
  console.log("Usernames", usernames)
  res.send("Usernames: " + usernames.map(user => user.username).join(", "));
});