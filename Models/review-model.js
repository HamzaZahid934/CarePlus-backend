import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'product', required: true },
    rating: { type: Number, required: true },
    comment: { type: String },
}, {
    timestamps: true
});

const Review = mongoose.model('Review', reviewSchema);
export default Review;
