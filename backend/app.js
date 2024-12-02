import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config({ path: './config/.env' });

//Route imports
import restaurantRoutes from './routes/restaurantRoutes.js';
import { connectDB } from './config/mongoConnection.js';

const app = express();

//db connection
connectDB();

//Middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/v1", restaurantRoutes);

export default app;
