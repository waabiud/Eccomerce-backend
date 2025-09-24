// routes/auth.routes.js

import express from "express";
import { signup, login, logout, refreshToken, getProfile } from "../controllers/auth.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/refresh-token", refreshToken);
router.get("/profile", protect, getProfile); // ✅ secure this route

export default router;
