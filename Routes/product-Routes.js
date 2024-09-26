import express from "express";
import {
  deleteProductData,
  getProductById,
  getProductsByUserId,
  getProductsData,
  postProductData,
  updateProductData,
  getProductsByCategory
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
// get by id
productRoute.get("/getproductbyUserId", getProductsByUserId);
//differ by category
productRoute.get("/category", getProductsByCategory);

export default productRoute;
