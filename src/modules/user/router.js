import express from "express"
import userController from "./controller.js"

const userRouter = express.Router()
const { add, getAll, edit, remove } = userController

userRouter
    .post("/", add)
    .get("/", getAll)
    .put("/:id", edit)
    .delete("/:id", remove)

export default userRouter

