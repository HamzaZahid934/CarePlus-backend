import express from "express";
import { addReview, getReviews } from "../Controllers/review.js";
import { Middleware } from "../Middleware/loginsystem-middleware.js";

const router = express.Router();

router.post('/:productId', Middleware, addReview);
router.get('/:productId', getReviews);

export default router;
