import mongoose from "mongoose";

const restaurantSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Enter restaurant name."]
    },
    address: {
        type: String,
        required: [true, "Enter restaurant address"],
        minLength: [8, "Address should contain atleast 8 characters"]
    },
    rating: {
        type: Number,
        default: 0,
        min: [0, "Rating cannot be less than 0"],
        max: [5, "Rating cannot be more than 5"]
    },
    addedOn: {
        type: Date,
        default: Date.now,
    }
})

export default mongoose.model('Restaurants', restaurantSchema);