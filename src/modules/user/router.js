import express from "express"
import userController from "./controller.js"

const userRouter = express.Router()
const { add, getAll, remove } = userController

userRouter.post("/", add)
userRouter.get("/", getAll)
userRouter.delete("/:id", remove)

export default userRouter

