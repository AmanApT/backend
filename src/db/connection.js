import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectToDatabase = async()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log("Succesfully connected to MongoDB HOST : ", connectionInstance.connection.host)

    } catch (error) {
        console.log("MONGODB CONNECTION ERROR @connection.js: ", error)
        process.exit(1)
    }
}

export default connectToDatabase