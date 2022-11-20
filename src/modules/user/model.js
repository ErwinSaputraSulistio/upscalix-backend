import Database from "../../configs/db.js"

const collection = Database.userCollection()

class UserModel {
    static create = async(input) => {
        try { 
            const result = await collection.create(input)
            return result
        }
        catch(err) { throw new Error(err) }
    }
    static findAll = async() => {
        try {
            const result = await collection.find()
            return result
        }
        catch(err) { throw new Error(err) }
    }
    static findAllByTimeToEmail = async(input) => {
        try {
            const result = await collection.find({ whenToEmail: { date: input.date, time: input.time } })
            return result
        }
        catch(err) { throw new Error(err) }
    }
    static deleteOneById = async(id) => {
        try {
            const result = await collection.deleteOne({ _id: id })
            return result
        }
        catch(err) { throw new Error(err) }
    }
}

export default UserModel