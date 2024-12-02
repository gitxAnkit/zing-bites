import Dishes from '../models/dishModel.js';
import Restaurant from '../models/restaurantModel.js';
import catchAsyncErrors from '../utils/catchAsyncErrors.js';

// @desc Get All dishes
export const getDishes = catchAsyncErrors(async (req, res, next) => {
    const dishes = await Dishes.find();

    res.status(200).json({
        success: true,
        dishes
    });
});

// @desc Add new dish
export const createDish = catchAsyncErrors(async (req, res, next) => {
    const { restaurantId } = req.params;
    const { dishName, description, price } = req.body;
    const restaurnt = await Restaurant.findById(restaurantId);
    console.log("Restaurant: ", restaurnt);
    const dish = await Dishes.create({
        name: dishName,
        description,
        price,
        restaurant: restaurantId,
        restaurantName: restaurnt.name,
    });
    res.status(201).json({
        success: true,
        message: "Dish added succesfully!!",
        dish
    })
})