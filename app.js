require('dotenv').config()
const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send(console.log("usernames will be logged here - wip")))

app.get("/new", (req, res) => res.render("form"))
app.post("/new", (req, res) => res.send(console.log("username to be saved: ", req.body.userName)))


const port = 3000 || process.env.PORT

app.listen(port, () => console.log(`App is listening on port https://localhost:${port}`))