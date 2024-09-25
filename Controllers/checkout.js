import Cart from "../Models/cart-model.js";
import Order from "../Models/order-model.js";

export const checkout = async (req, res) => {
    const userId = req.user._id;

    try {
        const cart = await Cart.findOne({ user: userId }).populate('products.product');

        if (!cart || cart.products.length === 0) {
            return res.status(400).json({ message: 'Cart is empty' });
        }

        const totalPrice = cart.products.reduce((total, item) => total + (item.product.price * item.quantity), 0);

        const order = new Order({
            user: userId,
            products: cart.products,
            totalPrice,
            paymentMethod: req.body.paymentMethod
        });

        await order.save();
        await Cart.deleteOne({ user: userId });

        res.status(200).json({ message: 'Order placed successfully', order });
    } catch (err) {
        res.status(500).json({ message: 'Checkout failed', error: err.message });
    }
};
