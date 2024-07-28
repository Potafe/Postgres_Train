const db = require("../db/queries");

exports.getUsernames = [
    async function getUsernames(req, res) {
        const usernames = await db.getAllUsernames();
        console.log("Usernames: ", usernames);
        res.send("Usernames: " + usernames.map(user => user.username).join(", "));
}]

exports.createUsernameGet = [async function createUsernameGet(req, res) {
  // render the form
  res.render("form")
}]

exports.createUsernamePost = [
    async function createUsernamePost(req, res) {
        const { username } = req.body;
        console.log(username)
        await db.insertUsername(username);
        res.redirect("/");
}]