import express from "express";
const router = express.Router();
import {SignupUser,Loginuser,Logoutuser} from '../Controllers/loginsystem.js';
import { Middleware } from "../Middleware/loginsystem-middleware.js";


// creating routes user controllers  

router.post("/signup", SignupUser)
router.post("/authlogin" ,Loginuser)
router.post("/logout",Middleware,Logoutuser)

export default router
