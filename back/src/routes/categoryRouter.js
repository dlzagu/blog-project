import express from "express";
import { categoryCtrl } from "../controllers/index.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router
  .route("/category")
  .get(categoryCtrl.getCategories)
  .post(auth, categoryCtrl.createCategory);

router
  .route("/category/:id")
  .put(auth, categoryCtrl.updateCategory)
  .delete(auth, categoryCtrl.deleteCategory);

export default router;
