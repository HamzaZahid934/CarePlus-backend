import Category from "../Models/category-model.js";

// Add a new category
export const addCategory = async (req, res) => {
    try {
        const { title, subtitle } = req.body;
        const imageUrl = req.file ? req.file.filename : null;  // Handle image upload

        if (!title || !subtitle || !imageUrl) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        const category = new Category({
            title,
            subtitle,
            imageUrl
        });

        await category.save();
        res.status(201).json({ message: "Category created successfully", category });
    } catch (error) {
        res.status(500).json({ message: "Error adding category", error: error.message });
    }
};

// Get all categories
export const getCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: "Error fetching categories", error: error.message });
    }
};

// Get category by ID
export const getCategoryById = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await Category.findById(id);
        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ message: "Error fetching category", error: error.message });
    }
};

// Update category by ID
export const updateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, subtitle } = req.body;
        const imageUrl = req.file ? req.file.filename : null;

        const category = await Category.findById(id);
        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }

        category.title = title || category.title;
        category.subtitle = subtitle || category.subtitle;
        category.imageUrl = imageUrl || category.imageUrl;

        await category.save();
        res.status(200).json({ message: "Category updated successfully", category });
    } catch (error) {
        res.status(500).json({ message: "Error updating category", error: error.message });
    }
};

// Delete category by ID
export const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await Category.findByIdAndRemove(id);
        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }
        res.status(200).json({ message: "Category deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting category", error: error.message });
    }
};
