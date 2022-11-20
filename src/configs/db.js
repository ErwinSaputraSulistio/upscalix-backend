import { connect, model, Schema } from "mongoose"

connect("mongodb://localhost:27017/upscalix", { useNewUrlParser: true, useUnifiedTopology: true })

class Database {
    static userCollection = () => {
        const userSchema = new Schema({
            email: { type: String, required: true, unique: true },
            fullName: { type: String, required: true },
            fullAddress: { type: String, required: true },
            birthday: { type: String, required: true },
            whenToEmail: { type: Object, required: true },
            timezone: { type: Object, required: true }
        },
        {
            collection: "user",
            timestamps: true
            
        })
        const collection = model("user", userSchema)
        return collection
    }
}

export default Database
