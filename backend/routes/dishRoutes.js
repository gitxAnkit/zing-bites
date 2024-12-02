import express from 'express';
import { createDish, getDishes } from '../controllers/dishControllers.js';

const router = express.Router();

router.route("/dishes").get(getDishes);
router.route("/restaurant/:restaurantId/dishes").post(createDish);

export default router;