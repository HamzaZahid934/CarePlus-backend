import express from "express";
import {
  
  getProductById,
  getProductsByUserId,
  getProductsData,
  postProductData,
  updateProductData,
 
} from "../Controllers/product.js";

import { Middleware } from "../Middleware/loginsystem-middleware.js"; 
import upload from "../Utils/helper.js";

const productRoute = express.Router();

//create
productRoute.post("/createproduct",Middleware,upload.single("image"), postProductData);
//fetch
productRoute.get("/get", getProductsData);
productRoute.get("/getproductbyid/:id", getProductById);
productRoute.get("/getproductsbycategories/:id", getproductsbyCategory)
//update
productRoute.put("/update/:id", updateProductData);
//delete
productRoute.delete("/delete/:id", deleteProductData);
// get by id
productRoute.get("/getproductbyUserId", getProductsByUserId);


export default productRoute;
