import express from 'express';
import { createDish, getDishes, updateDish, removeDish, getDishById } from '../controllers/dishControllers.js';

const router = express.Router();

router.route("/restaurant/:restaurantId/dishes").post(createDish);
router.route("/dishes").get(getDishes);
router.route("/dish/:dishId")
    .get(getDishById)
    .delete(removeDish)
    .put(updateDish);

export default router;