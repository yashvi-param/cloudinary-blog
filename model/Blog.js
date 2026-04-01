import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
{
  title: {
    type: String,
    required: true,
    trim: true,
  },

  content: {
    type: String,
    required: true,
  },

  author: {
    type: String,
    required: true,
  },

  category: {
    type: String,
     enum: ["Tech", "Health", "Business", "Sports", "Entertainment"],
  default: "Tech",
  },

  //image or video URL
  cdnUrl: {
    type: String,
  },

  cloudinary_Id: {
    type: String,
  },

},
{ timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;