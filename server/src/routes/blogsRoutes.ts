import { Router } from "express";
import { getBlogs, getBlogBySlug, createBlog } from "../controllers/blogsController.js";

const router = Router();

router.get("/", getBlogs);
router.get("/:slug", getBlogBySlug);
router.post("/", createBlog);

export default router;