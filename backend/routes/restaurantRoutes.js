import express from 'express';
import { addRestaurant, getAllRestaurants } from '../controllers/restaurantControllers.js';

const router = express.Router();

router.route("/restaurants").get(getAllRestaurants);
router.route("/restaurant").post(addRestaurant);

export default router;