import express from "express";
import {
  deleteUserData,
  getUserById,
  getUsersData,
  postUserData,
  updateUserData,
} from "../Controllers/User.js";

import upload from "../Utils/helper.js";


const userRoute = express.Router();

//create
// userRoute.post("/createuser", postUserData);
//fetch
userRoute.get("/get", getUsersData);
userRoute.get("/get/:id", getUserById);
//update
userRoute.put("/update/:id", updateUserData);
//delete
userRoute.delete("/delete/:id", deleteUserData);
//image
userRoute.post("/createUser", upload.single('image'), postUserData);

export default userRoute;
