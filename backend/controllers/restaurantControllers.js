import Restaurant from "../models/restaurantModel.js";
import { ApiFeatures } from "../utils/apiFeatures.js";
import catchAsyncErrors from "../utils/catchAsyncErrors.js";

export const getAllRestaurants = catchAsyncErrors(async (req, res, next) => {

    const resultPerPage = 10;
    const totalRestaurants = await Restaurant.countDocuments();

    const apiFeatures = new ApiFeatures(Restaurant.find(), req.query)
        .search()
        .filter()
        .pagination(resultPerPage);

    const restaurants = await apiFeatures.query;

    res.status(200).json({
        success: true,
        totalRestaurants: totalRestaurants,
        count: restaurants.length,
        restaurants
    });
});

export const getRestaurantById = catchAsyncErrors(async (req, res, next) => {
    const { restaurantId } = req.params;
    const restaurant = await Restaurant.findById(restaurantId);
    if (!restaurant) {
        res.status(404).json({
            success: false,
            message: "Restaurant not found!!"
        });
    }
    res.status(200).json({
        success: true,
        restaurant
    })
});

export const updateRestaurant = catchAsyncErrors(async (req, res, next) => {
    const { restaurantId } = req.params;

    let restaurant = await Restaurant.findById(restaurantId);
    if (!restaurant) {
        res.status(404).json({
            success: false,
            message: "Restaurant not found!!"
        });
    }
    restaurant = await Restaurant.findByIdAndUpdate(restaurantId, req.body, {
        new: true,
        runValidators: true,
    });
    res.status(200).json({
        success: true,
        restaurant
    })

});

// --Admin
export const addRestaurant = catchAsyncErrors(async (req, res, next) => {
    const { name, address } = req.body;

    const restaurant = await Restaurant.create({ name, address });
    res.status(201).json({
        success: true,
        restaurant
    })
});
// --admin
export const deleteRestaurant = catchAsyncErrors(async (req, res, next) => {
    const { restaurantId } = req.params;
    const restaurant = await Restaurant.findById(restaurantId);

    if (!restaurant) {
        return res.status(404).json({
            success: false,
            message: "Restaurant not found!!"
        });
    }
    await Restaurant.findByIdAndDelete(restaurantId);
    res.status(200).json({
        success: true,
        message: "Restaurant removed successfully!!"
    })

})