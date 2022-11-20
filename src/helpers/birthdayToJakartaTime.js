const birthdayToJakartaTime = (dateInput, gmt) => {
    try {
        const birthDayArray = dateInput.split("/")
        const gmtZeroTime = 2 
        const gmtNumber = parseInt(gmt.slice(0,3))
        let dateOfBirth = null
        let timeToSendMessages = null
        if(gmtNumber < -2) {
            dateOfBirth = `${parseInt(birthDayArray[0] - 1)}/${birthDayArray[1]}`
            timeToSendMessages = (24 + gmtZeroTime) + gmtNumber
        }
        else {
            dateOfBirth = birthDayArray[0] + "/" + birthDayArray[1]
            timeToSendMessages = gmtZeroTime + gmtNumber
        }
        return { date: dateOfBirth, time: timeToSendMessages }
    }
    catch(err) { throw new Error(err) }
}

export default birthdayToJakartaTime