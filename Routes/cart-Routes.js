import express from "express";
import { addToCart, removeFromCart, getCart } from "../Controllers/cart.js";
import { Middleware } from "../Middleware/loginsystem-middleware.js";

const router = express.Router();

router.post('/add', Middleware, addToCart);
router.delete('/remove/:productId', Middleware, removeFromCart);
router.get('/', Middleware, getCart);

export default router;
