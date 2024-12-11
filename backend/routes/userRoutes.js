import passportMiddleware from '../config/passport.js';
import { registerUser, getAllUsers, loginUser, userDetails, logoutUser, googleAuthCallback, removeUser } from '../controllers/userControllers.js';
import { authorizedRoles, isAuthenticatedUser } from '../middlewares/auth.js';
import express from 'express';

const router = express.Router();

router.route("/auth/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(isAuthenticatedUser, logoutUser);
router.route("/profile").get(isAuthenticatedUser, userDetails)

// Google Authentication Routes
router.route("/auth/google")
    .post(passportMiddleware.authenticate("google", { scope: ["profile", "email"] }));
router.route("/auth/google/callback")
    .post(passportMiddleware.authenticate("google", { failureRedirect: "/login" }),
        googleAuthCallback);

router.route("/admin/users").get(isAuthenticatedUser, authorizedRoles("admin"), getAllUsers);
router.route("/admin/user/:userId").delete(isAuthenticatedUser, authorizedRoles("admin"), removeUser);


export default router;