import express from "express";
const router = express.Router();
import {SignupUser,Loginuser,Logoutuser} from '../../Test/controller/user-controller.js';
import { UserMiddleware, userroleBasemiddleware } from "../../Test/middleware/user-middleware.js";


// creating routes user controllers  

router.post("/signup", SignupUser)
router.post("/login" ,Loginuser)
router.post("/logout",Middleware,userroleBasemiddleware('customer','admin','superadmin'),Logoutuser)

export default router
