import express from "express";
import { getFAQs, addFAQ } from "../Controllers/faq.js";
import { Middleware, roleBasemiddleware } from "../Middleware/loginsystem-middleware.js";

const router = express.Router();

router.get('/', getFAQs);
router.post('/', Middleware, roleBasemiddleware('admin', 'superadmin'), addFAQ);

export default router;
