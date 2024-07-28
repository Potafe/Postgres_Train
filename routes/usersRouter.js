const { Router } = require("express");
const usersControllers = require("../controllers/usersControllers")
const usersRouter = Router();

usersRouter.get("/", usersControllers.getUsernames)

usersRouter.get("/new", usersControllers.createUsernameGet)
usersRouter.post("/new", usersControllers.createUsernamePost)

usersRouter.get("/search", usersControllers.selectedUsersGet)
usersRouter.post("/search", usersControllers.selectedUsersPost)

usersRouter.get("/delete", usersControllers.deleteAllUsersGet)


module.exports = usersRouter;
