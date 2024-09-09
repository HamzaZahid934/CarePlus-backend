import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectdb = async () => {
  try {
    await mongoose.connect(process.env.MongooseURI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to database", error);
  }
};

export default connectdb;
