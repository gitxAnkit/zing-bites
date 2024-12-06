import mongoose from "mongoose";
import validator from "validator";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Enter user name"],
        minLength: [3, "Name should have at least 3 characters."],
    },
    email: {
        type: String,
        required: [true, "Enter user email"],
        unique: true,
        validate: [validator.isEmail, "Enter a valid email."],
    },
    password: {
        type: String,
        minLength: [8, "Password should be greater than 8 characters"],
        select: false,
    },
    avatar: {
        public_id: {
            type: String,
            // required: true,
        },
        url: {
            type: String,
            // required: true,
        },
    },
    googleId: {
        type: String, // For Google Sign-In users, storing Google unique ID
        unique: true, // Ensures no duplicate accounts
        sparse: true, // Allows multiple manual users with `null` Google IDs
    },
    role: {
        type: String,
        enum: ["user", "admin"], // Restricts role values
        default: "user",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
});
// Adding Index for Better Performance (optional but recommended)
userSchema.index({ email: 1 });
// Pre-save middleware to hash passwords before saving to the database
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next();
    }
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

// Generate JWT Token
userSchema.methods.getJWTToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    });
};

// Compare Password
userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

// Generate Password Reset Token
userSchema.methods.getResetPasswordToken = function () {
    // Generate a random token
    const resetToken = crypto.randomBytes(20).toString("hex");

    // Hash the token and set it in `resetPasswordToken` field
    this.resetPasswordToken = crypto
        .createHash("sha256")
        .update(resetToken)
        .digest("hex");

    // Set the expiry time for the token (15 minutes)
    this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

    return resetToken;
};
export default mongoose.model("User", userSchema);
