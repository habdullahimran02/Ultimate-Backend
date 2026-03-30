import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
    if (!process.env.MONGO_URI) {
        throw new Error("MONGO_URI is missing in .env");
    }

    await mongoose.connect(process.env.MONGO_URI, {
        dbName: DB_NAME,
    });
    console.log("Connected to MongoDB");
};

export default connectDB;