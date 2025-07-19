import foodModel from "../models/foodModels.js";

const addFood = async (req, res) => {
    // For Vercel deployment - expect image URL instead of file upload
    let image_url = req.body.image || null;

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: image_url, // Store image URL instead of filename
        category: req.body.category,
    });

    try {
        await food.save();
        res.json({
            success: true,
            message: "Food added successfully",
        });
    } catch (error) {
        console.error(error);
        res.json({
            error: error,
            success: false,
            message: "Error while adding food",
        });
    }
};


const getAllFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({
            success: true,
            data: foods
        })
    } catch (error) {
        console.log(Error);
        res.json({
            error: error,
            success: false,
            message: "some error occured"
        })

    }
};

const removeFood = async (req, res) => {
    try {
        await foodModel.findByIdAndDelete(req.body.id);
        res.status(200).json({
            success: true,
            message: "Food removed successfully"
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: `Got error like ${error}`
        })
    }
};


// Correct ESM export
export { addFood, removeFood, getAllFood };