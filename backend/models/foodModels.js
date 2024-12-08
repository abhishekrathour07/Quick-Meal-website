import mongoose from "mongoose";

// Define the schema
const foodSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
});

// Create the model
const foodModel = mongoose.models.food || mongoose.model("food", foodSchema);

// Export the model
export default foodModel;