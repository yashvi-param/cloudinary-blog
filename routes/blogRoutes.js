import express from "express";
import blogController from "../controllers/blogController.js";
import upload from "../middleware/upload.js";

const router = express.Router();

// CREATE BLOG
router.post("/add", upload.single("file"), blogController.createBlog);

// GET ALL BLOGS
router.get("/allBlogs", blogController.allBlogs);

// GET SINGLE BLOG
router.get("/:id", blogController.getBlog);

// UPDATE BLOG
router.patch(
  "/update/:id",
  upload.single("file"),
  blogController.updateBlog
);

// DELETE BLOG
router.delete("/delete/:id", blogController.deleteBlog);

export default router;