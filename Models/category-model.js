import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,  // If you are handling images
    }
}, {
    timestamps: true  // Automatically adds createdAt and updatedAt fields
});

const Category = mongoose.model('Category', categorySchema);
export default Category;
