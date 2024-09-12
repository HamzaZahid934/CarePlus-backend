import express from "express";
import {
  deleteProductData,
  getProductById,
  getProductsByUserId,
  getProductsData,
  postProductData,
  updateProductData,
} from "../Controllers/product.js";

const productRoute = express.Router();

//create
productRoute.post("/createproduct", postProductData);
//fetch
productRoute.get("/get", getProductsData);
productRoute.get("/get/:id", getProductById);
//update
productRoute.put("/update/:id", updateProductData);
//delete
productRoute.delete("/delete/:id", deleteProductData);

productRoute.get("/getproductbyUserId", getProductsByUserId);

export default productRoute;
