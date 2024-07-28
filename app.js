require('dotenv').config()
const express = require("express");
const app = express();
const usersRouter = require("./routes/usersRouter");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use("/", usersRouter)


const port = 3000 || process.env.PORT

app.listen(port, () => console.log(`App is listening on port https://localhost:${port}`))