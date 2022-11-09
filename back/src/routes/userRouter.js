import express from "express";
import { userCtrl } from "../controllers/index.js";
import { auth } from "../middleware/index.js";

const router = express.Router();

router.patch("/user", auth, userCtrl.updateUser);

export default router;
