import Restaurant from "../models/restaurantModel.js";
import catchAsyncErrors from "../utils/catchAsyncErrors.js";

export const getAllRestaurants = catchAsyncErrors(async (req, res, next) => {
    const restaurants = await Restaurant.find();

    res.status(200).json({
        success: true,
        restaurants
    });
});

export const addRestaurant = catchAsyncErrors(async (req, res, next) => {
    const { name, address } = req.body;

    const restaurant = await Restaurant.create({ name, address });
    console.log("Restaurant added successfully: ", restaurant);
    res.status(201).json({
        success: true,
        restaurant
    })
})