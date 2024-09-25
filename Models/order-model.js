import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
    products: [
        {
            product: { type: mongoose.Schema.Types.ObjectId, ref: 'product', required: true },
            quantity: { type: Number, required: true },
        }
    ],
    totalPrice: { type: Number, required: true },
    status: { type: String, default: 'Pending' },
    paymentMethod: { type: String, required: true },
    paymentStatus: { type: String, default: 'Unpaid' }
}, {
    timestamps: true
});

const Order = mongoose.model('Order', orderSchema);
export default Order;
