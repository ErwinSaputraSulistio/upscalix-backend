import checkTimezone from "./checkTimezone.js"
import birthdayToJakartaTime from "./birthdayToJakartaTime.js"

const convertUserDataToJakartaTime = async(input) => {
    const { firstName, lastName, email, birthday, address, city, country } = input
    const timezone = await checkTimezone(city, country)
    const birthdayInJakarta = birthdayToJakartaTime(birthday, timezone.offset)
    return {
        email,
        fullName: `${firstName} ${lastName}`,
        fullAddress: `${address}, ${city}, ${country}`,
        birthday,
        whenToEmail: birthdayInJakarta,
        timezone
    }
}

export default convertUserDataToJakartaTime