import axios from "axios"
import UserModel from "../modules/user/model.js"

export default async function birthdayMessenger() {
    let usersToMail = []

    const checkBirthdayToday = async() => {
        try {
            const today = new Date()
            const date = `${today.getDate()}/${(today.getMonth() + 1)}`
            const time = today.getHours()
            const result = await UserModel.findAllByTimeToEmail({ date, time })
            if(result) { usersToMail = result }
        }
        catch(err) { throw new Error(err) }
    }
    const fetchAxiosToMailAPI = async(data) => {
        try {
            const result = await axios.post("https://email-service.digitalenvision.com.au/send-email", {
                email: data.email,
                message: `Hey, ${data.fullName}, it's your birthday!`
            })
            const { status, sentTime } = result.data
            console.log({
                message: `Mail has been sent to ${data.email}`,
                status,
                sentTime
            })
        }
        catch(err) { setTimeout(() => { fetchAxiosToMailAPI(data) }, [1000]) }
    }
    const sendMailToUsers = () => {
        try {
            usersToMail.map(async(item) => {
                await fetchAxiosToMailAPI(item)
            })
        }
        catch(err) { throw new Error(err) }
    }
    
    await checkBirthdayToday()
    sendMailToUsers()
}