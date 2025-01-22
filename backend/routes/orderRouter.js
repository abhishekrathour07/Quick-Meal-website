import express from 'express';
import { placeOrder, getUserOrders, getAllOrders, getOrderById } from '../controller/orderController.js';
import authenticate from '../middleware/Auth.js';

const orderRouter = express.Router();

// Place a new order
orderRouter.post('/placeOrder', placeOrder);

// Retrieve all orders
orderRouter.get('/order-list',authenticate, getUserOrders);
orderRouter.get('/all-orders', getAllOrders);
orderRouter.get('/order/:id', authenticate, getOrderById);

export default orderRouter;
