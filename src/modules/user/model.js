import Database from "../../configs/db.js"

const collection = Database.userCollection()
const modelWrapper = async(callback) => {
    try { return await callback }
    catch(err) { throw new Error(err) }
}

class UserModel {
    static create = (input) => {
        return modelWrapper(collection.create(input))
    }
    static findAll = () => { 
        return modelWrapper(collection.find())
    }
    static findAllByTimeToEmail = ({ date, time }) => {
        return modelWrapper(collection.find({ whenToEmail: { date, time } }))
    }
    static updateById = (id, input) => {
        return modelWrapper(collection.findOneAndUpdate({ _id: id }, input))
    }
    static deleteById = (id) => { 
        return modelWrapper(collection.findOneAndDelete({ _id: id })) 
    }
}

export default UserModel