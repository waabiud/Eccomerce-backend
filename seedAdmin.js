import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/user.model.js";

dotenv.config(); // 👈 must come before using process.env

async function seedAdmin() {
  try {
    await mongoose.connect(process.env.MONGODB_URI); // 👈 reads from .env

    const existingAdmin = await User.findOne({ email: "admin@example.com" });
    if (existingAdmin) {
      console.log("Admin already exists");
      return;
    }

    const admin = new User({
      name: "Admin User",
      email: "admin@example.com",
      password: "admin123", // will be hashed
      role: "admin",
    });

    await admin.save();
    console.log("✅ Admin seeded successfully");
    process.exit(0);
  } catch (err) {
    console.error("❌ Error seeding admin:", err.message);
    process.exit(1);
  }
}

seedAdmin();
