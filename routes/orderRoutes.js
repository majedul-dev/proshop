import express from "express";
import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  getMyOrders,
  getOrderList,
  updateOrderToDelevery,
} from "../controllers/orderControler.js";
import { protect, admin } from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/", protect, addOrderItems);
router.get("/", protect, admin, getOrderList);
router.get("/myorders", protect, getMyOrders);
router.get("/:id", protect, getOrderById);
router.put("/:id/pay", protect, updateOrderToPaid);
router.put("/:id/delivery", protect, admin, updateOrderToDelevery);

export default router;
