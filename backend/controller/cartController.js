import user from "../models/user.js";

const addToCart = async (req, res) => {
    try {
        const userId = req.userId;
        const userData = await user.findById(userId);

        if (!userData) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        const cartData = userData.cartData || {};
        const itemId = req.body.itemId;

        if (!cartData[itemId]) {
            cartData[itemId] = 1;
        } else {
            cartData[itemId] += 1;
        }

        await user.findByIdAndUpdate(userId, { $set: { cartData } });
        res.json({ success: true, message: "Item added to cart successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Failed to add to cart" });
    }
};

const removeFromCart = async (req, res) => {
    try {
        const userId = req.userId;
        const userData = await user.findById(userId);

        if (!userData) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        const cartData = userData.cartData || {};
        const itemId = req.body.itemId;

        if (cartData[itemId]) {
            cartData[itemId] -= 1;
            if (cartData[itemId] <= 0) delete cartData[itemId];
        } else {
            return res.status(404).json({ success: false, message: "Item not found in cart" });
        }

        await user.findByIdAndUpdate(userId, { $set: { cartData } });
        res.json({ success: true, message: "Item removed from cart" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Failed to remove from cart" });
    }
};

const getCart = async (req, res) => {
    try {
        const userData = await user.findById(req.userId);

        if (!userData) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        res.json({ success: true, cartData: userData.cartData || {} });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Failed to fetch cart data" });
    }
};

export { addToCart, removeFromCart, getCart };
