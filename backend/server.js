import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import router from './routes/auth.js';
import foodRouter from './routes/foodRoutes.js';
import cartRouter from './routes/cartRouter.js';
import orderRouter from './routes/orderRouter.js';


dotenv.config();

const app = express();
const PORT = 3005;

// Connect to Database
connectDB();
app.use(express.json());
app.use(cors());

// this is auth router for validation
app.use("/auth", router);

// this is the food router 
app.use('/uploads', express.static('uploads'));
app.use("/api/food", foodRouter);


// this is the cart router
app.use("/api/cart", cartRouter);

// Order Routes
app.use("/api", orderRouter);

app.listen(PORT, () => {
    console.log("Server is started at port " + PORT);
});
