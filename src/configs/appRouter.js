import express from "express"
import userRouter from "../modules/user/router.js"

const appRouter = express.Router()

appRouter.use("/user", userRouter)

export default appRouter
