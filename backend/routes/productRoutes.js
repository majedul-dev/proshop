import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  productReviews,
  updateProduct,
} from "../controllers/productControler.js";
import { protect, admin } from "../middleware/authMiddleware.js";
const router = express.Router();

router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.post("/", protect, admin, createProduct);
router.delete("/:id", protect, admin, deleteProduct);
router.put("/:id", protect, admin, updateProduct);
router.post("/:id/reviews", protect, productReviews);

export default router;
