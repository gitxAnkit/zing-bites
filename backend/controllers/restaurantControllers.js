import Restaurant from "../models/restaurantModel.js";
import catchAsyncErrors from "../utils/catchAsyncErrors.js";

export const getAllRestaurants = catchAsyncErrors(async (req, res, next) => {
    const restaurants = await Restaurant.find();

    res.status(200).json({
        success: true,
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

export const addRestaurant = catchAsyncErrors(async (req, res, next) => {
    const { name, address } = req.body;

    const restaurant = await Restaurant.create({ name, address });
    console.log("Restaurant added successfully: ", restaurant);
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