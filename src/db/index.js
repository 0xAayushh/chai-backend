import mongoose from "mongoose";
import { DB_NAME } from "../constants.js"; // 1. Added .js extension

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`MongoDB connected: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("Error in MongoDB: ", error);
        process.exit(1);
    } // 2. Removed the hidden "ˀ" character here
};

export default connectDB;
