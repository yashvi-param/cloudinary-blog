import express from "express";
import blogController from "../controllers/blogController.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.post("/add", upload.single("image"), blogController.createBlog);

router.get("/allBlogs", blogController.allBlogs);

router.get("/allBlog", blogController.getBlog);

router.patch(
  "/update/:id",
  upload.single("image"),
  blogController.updateBlog
);

router.delete("/delete/:id", blogController.deleteBlog);

export default router;