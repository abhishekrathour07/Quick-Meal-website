import express from "express";
import multer from "multer";
import { addFood, getAllFood, removeFood } from "../controller/foodController.js";

const foodRouter = express.Router();

// For Vercel deployment - use memory storage instead of disk storage
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list", getAllFood);
foodRouter.post("/remove", removeFood);

export default foodRouter;