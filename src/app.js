import { config } from "dotenv"
import express from "express"
import appRouter from "./configs/appRouter.js"
import runCronJob from "./helpers/cronJob.js"
import birthdayMessenger from "./helpers/birthdayMessenger.js"

config({ path: '../.env' })
const app = express()
const port = process.env.PORT || 8000

const setAppUses = () => {
    app.use(express.urlencoded({ extended: false }))
    app.use(express.json())
    app.use(appRouter)
}
const runAppServer = () => {
    setAppUses()
    runCronJob("* 0 * * * *", birthdayMessenger)
    app.listen(port, () => { console.log("Server is currently running on port " + port) })
}

runAppServer()