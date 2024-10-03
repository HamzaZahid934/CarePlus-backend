import mongoose from "mongoose";
import user from "./user-model.js";
import Category from "./category-model.js";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
    },
    category: {
      ref :Category,
      type:mongoose.Schema.Types.ObjectId
      
    },
    user: {
      ref: user,
      type: mongoose.Schema.Types.ObjectId,
    },
  },
  {
    timestamps: true,
  }
);

let product = mongoose.model("product", productSchema);
export default product;
