import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import expressSession from 'express-session';

// Route imports
import restaurantRoutes from './routes/restaurantRoutes.js';
import dishesRoutes from './routes/dishRoutes.js';
import userRoutes from "./routes/userRoutes.js";
import { connectDB } from './config/mongoConnection.js';

const app = express();

// Database connection
connectDB();

// import passport from './config/passport.js';
import passportMiddleware from './config/passport.js';
// Middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(expressSession({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: process.env.NODE_ENV === "production" }
}));
app.use(passportMiddleware.initialize());
app.use(passportMiddleware.session());

// Routes
app.use("/api/v1", restaurantRoutes);
app.use("/api/v1", dishesRoutes);
app.use("/api/v1", userRoutes);

export default app;