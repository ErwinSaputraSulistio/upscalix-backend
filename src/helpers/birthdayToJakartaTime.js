const birthdayToJakartaTime = (dateInput, gmt) => {
    try {
        const birthDayArray = dateInput.split("/")
        const gmtZeroTime = 16
        const gmtNumber = parseInt(gmt.slice(0,3))
        let dateOfBirth = null
        let timeToSendMessages = null
        dateOfBirth = `${parseInt(birthDayArray[0])}/${birthDayArray[1]}`
        timeToSendMessages = gmtZeroTime - gmtNumber
        return { date: dateOfBirth, time: timeToSendMessages }
    }
    catch(err) { throw new Error(err) }
}

export default birthdayToJakartaTime