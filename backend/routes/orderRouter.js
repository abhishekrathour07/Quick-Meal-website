import express from 'express';
import { placeOrder, getOrders } from '../controller/orderController.js';

const orderRouter = express.Router();

// Place a new order
orderRouter.post('/place', placeOrder);

// Retrieve all orders
orderRouter.get('/list', getOrders);

export default orderRouter;
