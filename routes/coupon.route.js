import express from "express";
import { protectRoute } from "../middlewares/auth.middleware.js";
import { getCoupon } from "../controllers/coupon.controller.js";
import { validateCoupon } from "../controllers/coupon.controller.js";

const router = express.Router();

router.get("/", protectRoute, getCoupon);
router.post("/validate", protectRoute, validateCoupon);

export default router;
