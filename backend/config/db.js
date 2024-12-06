import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to Quick-Meal database");
  } catch (err) {
    console.error(err.message);
    console.log("Trouble while connecting to the database");
    process.exit(1);
  }
};

export default connectDB;
