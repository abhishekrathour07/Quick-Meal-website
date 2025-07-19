import jwt from 'jsonwebtoken'
import bcrypt from "bcryptjs";
import user from '../models/user.js';


export const signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Check if the user already exists
        const existingUser = await user.findOne({ email });
        if (existingUser) {
            return res.status(409).json({
                message: "User already exists, you can login",
                success: false,
            });
        }

        // Create a new user
        const newUser = new user({ username, email, password });
        newUser.password = await bcrypt.hash(password, 10);
        await newUser.save();

        // Respond with success
        res.status(201).json({
            message: "SignUp Successfully you can now Login",
            success: true,
        });
    } catch (err) {
        // Handle server errors
        console.error("Error during signup:", err);
        res.status(500).json({
            message: "Server Error",
            success: false,
        });
    }
};
export const login = async (req, res) => {

    try {
        const { email, password } = req.body;
        const errorMsg = "Authentication Failed ,email or password is wrong "
        const existingUser = await user.findOne({ email });
        if (!existingUser) {
            return res.status(403).json({
                message: errorMsg,
                success: false,
            });
        }

        // decrypt password
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordCorrect) {
            return res.status(403).json({
                message: errorMsg,
                success: false,
            });
        }
        const jwtToken = jwt.sign(
            { email: existingUser.email, _id: existingUser._id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' });


        // Respond with success
        res.status(200).json({
            message: "Login Successfully",
            success: true,
            jwtToken,
            email,
            name: existingUser.username,
            userId: existingUser._id,
        });
    } catch (err) {
        // Handle server errors
        console.error("Error during login:", err);
        res.status(500).json({
            message: "Server Error",
            success: false,
        });
    }
};

