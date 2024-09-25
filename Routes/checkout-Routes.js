import express from "express";
import { checkout } from "../Controllers/checkout.js";
import { Middleware } from "../Middleware/loginsystem-middleware.js";

const router = express.Router();

router.post('/', Middleware, checkout);

export default router;
