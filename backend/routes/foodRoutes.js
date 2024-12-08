import express from "express";
import multer from "multer";
import { addFood, getAllFood, removeFood } from "../controller/foodController.js";

const foodRouter = express.Router();

const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}_${file.originalname}`);
    }
});
const upload = multer({ storage: storage });

foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list", upload.single("image"), getAllFood);
foodRouter.post("/remove", upload.single("image"), removeFood);

export default foodRouter;