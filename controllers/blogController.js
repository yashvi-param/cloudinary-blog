import Blog from "../model/Blog.js";
import HttpError from "../middleware/httpError.js";
import cloudinary from "../config/cloudinary.js";


const createBlog = async (req, res, next) => {
  try {

    const { title, content, author, category } = req.body;

    if (!req.file) {
      return next(new HttpError("File (image/video) is required", 400));
    }

    const blog = await Blog.create({
      title,
      content,
      author,
      category,
      cdnUrl: req.file.path,
      cloudinary_Id: req.file.filename,
    });

    res.status(201).json({
      success: true,
      blog,
    });

  } catch (error) {
    next(error);
  }
};


// GET ALL BLOGS
const allBlogs = async (req, res, next) => {
  try {

    const blogs = await Blog.find({});

    if (blogs.length === 0) {
      return res.status(200).json({
        message: "No blogs found",
      });
    }

    res.status(200).json({
      success: true,
      blogs,
    });

  } catch (error) {
    next(new HttpError(error.message, 500));
  }
};


// GET SINGLE BLOG
const getBlog = async (req, res, next) => {
  try {

    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return next(new HttpError("Blog not found", 404));
    }

    res.status(200).json({
      success: true,
      blog,
    });

  } catch (error) {
    next(new HttpError(error.message, 500));
  }
};


// UPDATE BLOG
const updateBlog = async (req, res, next) => {
  try {

    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return next(new HttpError("Blog not found", 404));
    }

    if ((!req.body || Object.keys(req.body).length === 0) && !req.file) {
      return next(new HttpError("No update data provided", 400));
    }

    const updates = Object.keys(req.body);

    const allowedUpdates = [
      "title",
      "content",
      "author",
      "category",
    ];

    const isValid = updates.every((field) =>
      allowedUpdates.includes(field)
    );

    if (!isValid) {
      return next(new HttpError("Invalid update fields", 400));
    }

    updates.forEach((update) => {
      blog[update] = req.body[update];
    });

    // update file (image/video)
    if (req.file) {

      if (blog.cloudinary_Id) {
        await cloudinary.uploader.destroy(blog.cloudinary_Id);
      }

      blog.cdnUrl = req.file.path;
      blog.cloudinary_Id = req.file.filename;
    }

    await blog.save();

    res.status(200).json({
      success: true,
      message: "Blog updated successfully",
      blog,
    });

  } catch (error) {
    next(new HttpError(error.message, 500));
  }
};


// DELETE BLOG
const deleteBlog = async (req, res, next) => {
  try {

    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return next(new HttpError("Blog not found", 404));
    }

    if (blog.cloudinary_Id) {
      await cloudinary.uploader.destroy(blog.cloudinary_Id);
    }

    await blog.deleteOne();

    res.status(200).json({
      success: true,
      message: "Blog deleted successfully",
    });

  } catch (error) {
    next(new HttpError(error.message, 500));
  }
};


export default {
  createBlog,
  allBlogs,
  getBlog,
  updateBlog,
  deleteBlog,
};