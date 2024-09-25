import Review from "../Models/review-model";

// Add a review
export const addReview = async (req, res) => {
    const { productId, rating, comment } = req.body;

    try {
        const review = new Review({
            user: req.user._id,
            product: productId,
            rating,
            comment
        });

        await review.save();
        res.status(201).json({ message: 'Review added successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error adding review', error: err.message });
    }
};

// Get reviews for a product
export const getReviews = async (req, res) => {
    const { productId } = req.params;

    try {
        const reviews = await Review.find({ product: productId }).populate('user', 'name');
        res.status(200).json(reviews);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching reviews', error: err.message });
    }
};
