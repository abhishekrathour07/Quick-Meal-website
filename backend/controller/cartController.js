import user from "../models/user.js";

// User model  ke jagh user use kiya hu 
const addToCart = async (req, res) => {
    try {
        // see first we will access the user_id which is comming from the middleware after aurhentication which 
        // we have passed through decoded._id or can send email also
        const userId = req.userId;

        // now with that id we will find the user detail in the mogodb 
        const userData = await user.findById(userId);

        // now with that detail we will find the  out the cartData which was empty at initial state
        const cartData = userData.cartData || {};

        // here we are accesing the item id which is at present passed in the body manually 
        const itemId = req.body.itemId

        // after everthing worked properly now we will add that particular product to the specific loggeg in user 
        if (!cartData[itemId]) {
            cartData[itemId] = 1;  // if for the first time then it is considered as 1st item
        } else {
            cartData[itemId] += 1; // if some are already there then we will increase it by one 
        }

        // after all the fuss has been done now we have to update that user object to know how many items are added for his cart right 
        await user.findByIdAndUpdate(req.userId, { cartData });
        res.json({
            success: true,
            message: "Item added to cart successfully",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Failed to add to cart" });
    }
};

const removeFromCart = async (req, res) => {
    try {
        const userId = req.userId
        const userData = await user.findById(userId);
        if (!userData) {
            return res.json({ success: false, message: "User not found" });
        }

        const cartData = userData.cartData || {};
        const itemId = req.body.itemId;

        // logic for this is suppose we have 2 shirts 2 trousers and 1 jeasn if we remove jeans form the cart it should delete it 
        // as it was having only one jeans but for trouser if it deletes the jeasn once it should not delete but reduce it by one
        // unless and untill the product is 0 we should not delete it but we should just remove it from the cart 
        if (cartData[itemId]) {
            cartData[itemId] -= 1;
            if (cartData[itemId] <= 0) delete cartData[itemId];
        }

        await user.findByIdAndUpdate(req.userId, { cartData });
        if (cartData[itemId] === 0) {
            res.json({ success: true, message: "Item removed from your cart" });
        } else {
            res.status(404).json({ success: false, message: "No item in the cart" });

        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Failed to remove from cart" });
    }
};

const getCart = async (req, res) => {
    try {
        const userData = await user.findById(req.userId);
        if (!userData) {
            return res.json({ success: false, message: "User not found" });
        }

        res.json({ success: true, cartData: userData.cartData });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Failed to fetch cart data" });
    }
};

export { addToCart, removeFromCart, getCart };