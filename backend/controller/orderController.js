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
const getUserOrders = async (req, res) => {
    try {
      const userId = req.userId; 
      
      if (!userId) {
        return res.status(400).json({ success: false, message: "User ID is required" });
      }
  
      // Fetch orders filtered by userId
      const orders = await orderModel.find({ userId });
  
      if (orders.length === 0) {
        return res.json({
          success: false,
          message: 'No orders found for this user.',
        });
      }
  
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

  const getAllOrders = async (req, res) => {
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

const getOrderById = async (req, res) => {
    try {
      const { id } = req.params;
      const order = await orderModel.findById(id);
  
      if (!order) {
        return res.status(404).json({ success: false, message: 'Order not found' });
      }
  
      res.status(200).json({ success: true, data: order });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Failed to fetch order', error: error.message });
    }
  };

export { placeOrder, getUserOrders ,getAllOrders,getOrderById };
