import express from "express";
const router = express.Router();
import {SignupUser,Loginuser,Logoutuser} from '../Controllers/loginsystem.js';
import { Middleware, roleBasemiddleware } from "../Middleware/loginsystem-middleware.js";


// creating routes user controllers  

router.post("/signup", SignupUser)
router.post("/authlogin" ,Loginuser)
router.post("/logout",Middleware,roleBasemiddleware(['customer','admin','Manager']),Logoutuser)

export default router
