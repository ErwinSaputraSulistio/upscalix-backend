import UserModel from "./model.js"
import ResultJSON from "../../helpers/resultJSON.js"
import checkTimezone from "../../helpers/checkTimezone.js"
import birthdayToJakartaTime from "../../helpers/birthdayToJakartaTime.js"

const { create, findAll, deleteOneById } = UserModel
const { success, failed } = ResultJSON

class userController {
    static add = async(req, res) => {
        try {
            const { firstName, lastName, email, birthday, address, city, country } = req.body
            if(firstName && lastName && email && birthday && address && city && country) {
                const timezone = await checkTimezone(city, country)
                const birthdayInJakarta = birthdayToJakartaTime(birthday, timezone.offset)
                const newUserData = {
                    email,
                    fullName: firstName + " " + lastName,
                    fullAddress: address + ", " + city + ", " + country,
                    birthday,
                    whenToEmail: birthdayInJakarta,
                    timezone
                 }
                const result = await create(newUserData)
                if(result) { success(res, "User has been created!", result) }
            }
            else {
                throw new Error("allInputsMustBeFilled")
            }
        }
        catch(err) { failed(res, err.message) }
    }
    static getAll = async(req, res) => {
        try {
            const result = await findAll()
            success(res, "Successfully get the list of users!", result) 
        }
        catch(err) { failed(res, err.message) }
    }
    static remove = async(req, res) => {
        try {
            const id = req.params.id
            await deleteOneById(id)
            success(res, "Successfully deleted the user with id of " + id)
        }
        catch(err) { failed(res, err.message) }
    }
}

export default userController