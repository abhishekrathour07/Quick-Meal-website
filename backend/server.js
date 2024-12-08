import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import router from './routes/auth.js';
import foodRouter from './routes/foodRoutes.js';
import cartRouter from './routes/cartRouter.js';

dotenv.config();

const app = express();
const PORT = 3005;

// Connect to Database
connectDB();
app.use(express.json());
app.use(cors());

app.use("/auth", router);
app.use("/api/food", foodRouter);
app.use("/api/cart", cartRouter);

app.listen(PORT, () => {
    console.log("Server is started at port " + PORT);
});
