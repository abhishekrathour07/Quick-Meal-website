import express from "express";
import { addToCart, getCart, removeFromCart } from "../controller/cartController.js";
import authenticate from "../middleware/Auth.js";

const cartRouter = express.Router();

cartRouter.post("/add", authenticate, addToCart);
cartRouter.post("/remove", authenticate, removeFromCart);
cartRouter.get("/get", authenticate, getCart);

export default cartRouter;
