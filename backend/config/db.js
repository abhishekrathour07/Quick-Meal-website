import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Congrats Connection successfull to mongodb");
  } catch (err) {
    console.error(err.message);
    console.log("Trouble while connecting to the database");
    process.exit(1);
  }
};

export default connectDB;
