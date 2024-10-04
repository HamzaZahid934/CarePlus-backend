import express from "express";
import {
  getProductById,
  getProductsData,
  postProductData,
} from "../Test/controller/product-controller.js";

import { UserMiddleware } from "../Test/middleware/user-middleware.js"; 


const productRoute = express.Router();

//create
productRoute.post("/createproduct",UserMiddleware, postProductData);
//fetch
productRoute.get("/get", getProductsData);
productRoute.get("/getproductbyid/:id", getProductById);




export default productsRoute;
