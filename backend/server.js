import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'; 
import connectDB from './config/db.js';

dotenv.config(); 

const app = express();
const PORT = process.env.PORT || 3005; 

app.use(express.json());
app.use(cors());

// Connect to Database
connectDB();

app.get('/', (req, res) => {
    res.send("Connected to API");
});

app.listen(PORT, () => {
    console.log("Server is started at port " + PORT);
});
