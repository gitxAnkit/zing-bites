import passportMiddleware from '../config/passport.js';
import { registerUser, getAllUsers, loginUser, logoutUser, googleAuthCallback } from '../controllers/userControllers.js';
import { authorizedRoles, isAuthenticatedUser } from '../middlewares/auth.js';
import express from 'express';

const router = express.Router();

router.route("/auth/register").post(registerUser);
router.route("/login").post(loginUser);

// Google Authentication Routes
router.route("/auth/google")
    .post(passportMiddleware.authenticate("google", { scope: ["profile", "email"] }));

router.route("/auth/google/callback")
    .post(passportMiddleware.authenticate("google", { failureRedirect: "/login" }),
        googleAuthCallback
    );

router.route("/logout").get(logoutUser);

router.route("/users").get(getAllUsers);

export default router;