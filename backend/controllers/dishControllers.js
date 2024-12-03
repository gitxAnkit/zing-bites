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
});

//@desc Remove a dsih
export const removeDish = catchAsyncErrors(async (req, res, next) => {
    const { dishId } = req.params;
    const dish = Dishes.findById(dishId);
    if (!dish) {
        res.status(404).json({
            success: false,
            message: "Dish not found!!",
        });
    }
    await Dishes.findByIdAndDelete(dishId);
    console.log("Response: ", response);
    res.status(200).json({
        success: true,
        message: "Dish removed successfully!!"
    })
});
//@desc Get a dsih
export const getDishById = catchAsyncErrors(async (req, res, next) => {
    const { dishId } = req.params;
    const dish = await Dishes.findById(dishId);
    if (!dish) {
        res.status(404).json({
            success: false,
            message: "Dish not found!!",
        });
    }
    res.status(200).json({
        success: true,
        dish
    })
});

