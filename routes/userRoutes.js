import express from "express";
import {
  registerUser,
  authUser,
  getUserProfile,
  updateUserProfile,
  getAllUsers,
  deleteUser,
  getUserForUpdate,
  updateUserInfoByAdmin,
} from "../controllers/userController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", registerUser);
router.get("/", protect, admin, getAllUsers);
router.post("/login", authUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router.get("/:id", protect, admin, getUserForUpdate);
router.put("/:id", protect, admin, updateUserInfoByAdmin);
router.delete("/:id", protect, admin, deleteUser);

export default router;
