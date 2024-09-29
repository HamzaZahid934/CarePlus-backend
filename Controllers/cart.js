import Cart from "../Models/cart-model.js";

// Add product to cart
export const addToCart = async (req, res) => {
    const userId = req.user.userId;
    console.log(userId,"iii",req.user)
    const { productId, quantity } = req.body;

    try {
        let cart = await Cart.findOne({ user: userId });

        if (!cart) {
            cart = new Cart({ user: userId, products: [] });
        }

        const productIndex = cart.products.findIndex(p => p.product == productId);

        if (productIndex > -1) {
            cart.products[productIndex].quantity += quantity;
        } else {
            cart.products.push({ product: productId, quantity });
        }

        await cart.save();
        res.status(200).json(cart);
    } catch (err) {
        res.status(500).json({ message: 'Error adding to cart', error: err.message });
    }
};

// Remove product from cart
export const removeFromCart = async (req, res) => {
    const userId = req.user.userId;
    const { productId } = req.params;

    try {
        let cart = await Cart.findOne({ user: userId });

        if (!cart) return res.status(404).json({ message: 'Cart not found' });

        cart.products = cart.products.filter(p => p.product != productId);

        await cart.save();
        res.status(200).json(cart);
    } catch (err) {
        res.status(500).json({ message: 'Error removing from cart', error: err.message });
    }
};

// Get user's cart
export const getCart = async (req, res) => {
    const userId = req.user.userId;

    try {
        const cart = await Cart.findOne({ user: userId }).populate('products.product');
        if (!cart) return res.status(404).json({ message: 'Cart not found' });
        res.status(200).json(cart);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching cart', error: err.message });
    }
};
