import mongoose from 'mongoose';

// Define the allowed categories using an enum
const allowedCategories = ['PetFoods', 'DogTreats', 'LitterCare', 'RawDogFood', 'Crates&Beds','OutdoorGear','PuppyFood','DietDogFood'];

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        enum: allowedCategories,  // Restrict values to the allowed categories
        required: true,
      },
    subtitle: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,  // If you are handling images
    }
}, {
    timestamps: true  // Automatically adds createdAt and updatedAt fields
});

const Category = mongoose.model('Category', categorySchema);
export default Category;
