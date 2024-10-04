import express from "express";
import { addReview, getReviews } from "../../Test/controller/review-controller.js";
import { UserMiddleware } from "../../Test/middleware/user-middleware.js";

const router = express.Router();

router.post('/:productId', UserMiddleware, addReview);
router.get('/:productId', getReviews);

export default router;