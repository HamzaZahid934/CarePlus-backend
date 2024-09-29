import express from 'express';
import { addCategory, getCategories, getCategoryById, updateCategory, deleteCategory } from "../Controllers/category.js";
import { Middleware } from "../Middleware/loginsystem-middleware.js";  // If using JWT auth
import upload from "../Utils/helper.js";  // For image handling (multer)

const router = express.Router();

// Create a new category
router.post('/category', Middleware, upload.single('image'), addCategory);

// Get all categories
router.get('/getcategories', getCategories);

// Get a category by ID
router.get('/category/:id', getCategoryById);

// Update a category by ID
router.put('/category/:id', Middleware, upload.single('image'), updateCategory);

// Delete a category by ID
router.delete('/category/:id', Middleware, deleteCategory);

export default router;
