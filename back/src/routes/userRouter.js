import express from "express";
import { userCtrl } from "../controllers/index.js";
import { auth } from "../middleware/index.js";

const router = express.Router();

router.patch("/user", auth, userCtrl.updateUser);
router.patch("/reset_password", auth, userCtrl.resetPassword);

export default router;
