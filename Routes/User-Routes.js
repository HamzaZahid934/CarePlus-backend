import express from "express";
import {
  getUserById,
  getUsersData,
  postUserData,
} from "../Controllers/User.js";

const userRoute = express.Router();

userRoute.post("/createuser", postUserData);
userRoute.get("/get", getUsersData);
userRoute.get("/get/:id", getUserById);

export default userRoute;
