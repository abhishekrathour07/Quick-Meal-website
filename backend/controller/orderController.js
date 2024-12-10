import orderModel from "../models/orderModel.js";


// Place a new order
const placeOrder = async (req, res) => {
    try {
        const { userId, items, totalAmount } = req.body;

        if (!items || items.length === 0) {
            return res.json({
                success: false,
                message: 'Order must contain at least one item.',
            });
        }

        const newOrder = new orderModel({
            userId,
            items,
            totalAmount,
            status: 'Pending',
            createdAt: new Date(),
        });

        await newOrder.save();

        res.json({
            success: true,
            message: 'Order placed successfully',
        });
    } catch (error) {
        console.error('Error placing order:', error);
        res.json({
            success: false,
            message: `Error placing order: ${error}`,
        });
    }
};

// Get all orders
const getOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({});
        res.json({
            success: true,
            data: orders,
        });
    } catch (error) {
        console.error('Error fetching orders:', error);
        res.json({
            success: false,
            message: `Error fetching orders: ${error}`,
        });
    }
};

export { placeOrder, getOrders };
