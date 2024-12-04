import Dishes from '../models/dishModel.js';
import Restaurant from '../models/restaurantModel.js';
import { ApiFeatures } from '../utils/apiFeatures.js';
import catchAsyncErrors from '../utils/catchAsyncErrors.js';

// @desc Get All dishes
export const getDishes = catchAsyncErrors(async (req, res, next) => {
    const resultPerPage = 10;
    const totalDishesCount = await Dishes.countDocuments();

    const apiFeatures = new ApiFeatures(Dishes.find().populate("restaurant"), req.query)
        .search()
        .filter()
        .pagination(resultPerPage);

    const dishes = await apiFeatures.query;

    res.status(200).json({
        success: true,
        totalDishesCount,
        resultPerPage,
        count: dishes.length,
        dishes
    });
});

// @desc Add new dish
export const createDish = catchAsyncErrors(async (req, res, next) => {
    const { restaurantId } = req.params;
    const restaurant = await Restaurant.findById(restaurantId);

    if (!restaurant) {
        return res.status(404).json({
            success: false,
            message: "Restaurant not found.",
        });
    }
    const { name, price } = req.body;
    if (!name || !price) {
        return res.status(400).json({
            success: false,
            message: "Dish name and price are required.",
        });
    }
    const dish = await Dishes.create({
        ...req.body,
        restaurant: restaurantId,
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
    res.status(200).json({
        success: true,
        message: "Dish removed successfully!!"
    })
});
//@desc Get a dsih
export const getDishById = catchAsyncErrors(async (req, res, next) => {
    const { dishId } = req.params;
    const dish = await Dishes.findById(dishId).populate("restaurant");
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
// @desc Update a dish
export const updateDish = catchAsyncErrors(async (req, res, next) => {
    const { dishId } = req.params;
    let dish = await Dishes.findById(dishId);
    if (!dish) {
        res.status(404).json({
            success: false,
            message: "Dish not found"
        });
    }
    dish = await Dishes.findByIdAndUpdate(dishId, req.body, {
        new: true,
        runValidators: true,
    });
    res.status(200).json({
        success: true,
        message: "Dish Updated successfully!!",
        dish
    });
});
