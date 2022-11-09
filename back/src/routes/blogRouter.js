import express from "express";
import { blogCtrl } from "../controllers/index.js";
import { auth } from "../middleware/index.js";

const router = express.Router();

router.post("/blog", auth, blogCtrl.createBlog);

router.get("/home/blogs", blogCtrl.getHomeBlogs);

router.get("/blogs/:category_id", blogCtrl.getBlogsByCategory);

export default router;
