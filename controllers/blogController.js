import Blog from "../model/Blog.js";
import HttpError from "../middleware/httpError.js";
import cloudinary from "../config/cloudinary.js";


// CREATE BLOG
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
      image: req.file.path,
      cloudinary_Id: req.file.filename,
    });

    res.status(201).json({
      success: true,
      blog,
    });

  } catch (error) {
    next(new HttpError(error.message, 500));
  }
};


// GET ALL BLOGS
const allBlogs = async (req, res, next) => {
  try {
    const blogs = await Blog.find();

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

    
    console.log("BODY:", req.body);

    
    const allowedUpdates = ["title", "content", "author", "category"];

    
    const updates = Object.keys(req.body).filter((field) =>
      allowedUpdates.includes(field)
    );

    
    updates.forEach((field) => {
      blog[field] = req.body[field];
    });

    
    if (req.file) {
      if (blog.cloudinary_Id) {
        await cloudinary.uploader.destroy(blog.cloudinary_Id);
      }

      blog.image = req.file.path;
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