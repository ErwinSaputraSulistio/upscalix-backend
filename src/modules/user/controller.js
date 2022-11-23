import UserModel from "./model.js"
import ResultJSON from "../../helpers/resultJSON.js"
import userDataConverter from "../../helpers/userDataConverter.js"

const { create, findAll, updateById, deleteById } = UserModel
const { success, failed } = ResultJSON
const controllerWrapper = async(res, callback) => {
    try { await callback() }
    catch(err) { failed(res, err.message) }
}

class userController {
    static add = async(req, res) => {
        const { firstName, lastName, email, birthday, address, city, country } = req.body
        if(firstName && lastName && email && birthday && address && city && country) {
            controllerWrapper(res, async() => {
                const newUserData = await userDataConverter(req.body)
                const result = await create(newUserData)
                if(result) { success(res, "User has been created!", result) }
            })
        }
        else {
            throw new Error("allInputsMustBeFilled")
        }
    }
    static getAll = (req, res) => {
        controllerWrapper(res, async() => {
            const result = await findAll()
            success(res, "Successfully get the list of users!", result) 
        })
    }
    static edit = (req, res) => {
        const { id } = req.params
        const { firstName, lastName, email, birthday, address, city, country } = req.body
        if(!firstName || !lastName || !email || !birthday || !address || !city || !country) {
            throw new Error("allInputsMustBeFilled")
        }
        else {
            controllerWrapper(res, async() => {
                const updatedUserData = await userDataConverter(req.body)
                const result = await updateById(id, updatedUserData)
                if(result) { success(res, `User with ID of ${id} has been updated!`, updatedUserData) }
                else { throw new Error("invalidParamsId") }
            })
        }
    }
    static remove = (req, res) => {
        controllerWrapper(res, async() => {
            const id = req.params.id
            const result = await deleteById(id)
            if(result) { success(res, "Successfully deleted the user with id of " + id) }
            else { throw new Error("invalidParamsId") }
        })
    }
}

export default userController