import express from 'express'
import { addFood } from '../controller/foodController.js';
import multer from 'multer'

const foodRouter = express.Router();


//  Image storage engine
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/"); // Set the upload folder
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`); // Set a unique filename
    }
})

const upload = multer({ storage: storage });

foodRouter.post('/add', upload.single("image"), addFood);

export default foodRouter

