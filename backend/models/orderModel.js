import mongoose from 'mongoose';

const orderSchema = mongoose.Schema({
    userId: { type: String, required: true },
    items: [
        {
            name: { type: String, required: true },
            price: { type: Number, required: true },
            quantity: { type: Number, required: true },
            image: { type: String, required: true },
        },
    ],
    totalAmount: { type: Number, required: true },
    status: { type: String, default: 'Pending' }, 
    createdAt: { type: Date, default: Date.now },
});

const orderModel = mongoose.model('Order', orderSchema);

export default orderModel;
