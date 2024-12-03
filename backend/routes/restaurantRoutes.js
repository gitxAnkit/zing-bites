import express from 'express';
import { addRestaurant, deleteRestaurant, getAllRestaurants, getRestaurantById } from '../controllers/restaurantControllers.js';

const router = express.Router();

router.route("/restaurants")
    .get(getAllRestaurants);
router.route("/restaurant")
    .post(addRestaurant);

router.route("/restaurant/:restaurantId")
    .delete(deleteRestaurant)
    .get(getRestaurantById);


export default router;