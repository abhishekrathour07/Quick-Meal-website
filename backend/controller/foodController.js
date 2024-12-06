import foodModel from "../models/foodModels.js";

// Add food item
export const addFood = async (req, res) => {
    try {
        console.log("Request body:", req.body);
        console.log("Uploaded file:", req.file);

        if (!req.body.name || !req.body.description || !req.body.price || !req.body.category) {
            return res.status(400).json({
                message: "All fields are required",
                success: false,
            });
        }
        if (!req.file) {
            return res.status(400).json({
                message: "Image file is required",
                success: false,
            });
        }

        const food = new foodModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            image: `/uploads/${req.file.filename}`,
        });

        await food.save();

        res.status(201).json({
            message: "Food added successfully",
            success: true,
        });
    } catch (err) {
        console.log("Error:", err);
        res.status(500).json({
            message: "Server Error or bad request",
            success: false,
        });
    }
};
