import { CronJob } from "cron"

const runCronJob = (interval, callback, timezone = "Asia/Jakarta") => {
    const cron = new CronJob(
        interval, 
        () => { callback() }, 
        null, 
        true, 
        timezone
    )
    return cron.start()
}

export default runCronJob