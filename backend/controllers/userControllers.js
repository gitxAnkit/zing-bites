import catchAsyncErrors from "../utils/catchAsyncErrors.js";
import User from "../models/userModel.js";
import { sendToken } from "../utils/jwtToken.js";
import { ErrorHandler } from "../utils/errorHandler.js";

export const registerUser = catchAsyncErrors(async (req, res, next) => {
    const { name, email, password } = req.body;

    const user = await User.create({ name, email, password });
    sendToken(user, 201, res);
});

export const loginUser = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return new ErrorHandler("Please enter email or password.", 400);
    }
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
        return new ErrorHandler("Invalid email or password", 401);
    }
    const isPasswordMatched = await user.comparePassword(password);
    if (!isPasswordMatched) {
        return new ErrorHandler("Invalid email or password.", 401);
    }
    sendToken(user, 200, res);
})
export const googleAuthCallback = catchAsyncErrors(async (req, res, next) => {
    const user = req.user; // Retrieved by Passport

    console.log("Session:: ", process.env.SESSION_SECRET);
    if (!user) {
        return res.status(400).json({
            success: false,
            message: "Authentication failed.",
        });
    }

    // Send the token and user data
    sendToken(user, 200, res);
});

export const logoutUser = catchAsyncErrors(async (req, res, next) => {
    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
    });
    res.status(200).json({
        success: true,
        message: "Logged out successfully!!"
    });

})

export const getAllUsers = catchAsyncErrors(async (req, res, next) => {
    const user = await User.find();

    res.status(200).json({
        success: true,
        user
    })
});
