import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "blog_uploads",
    resource_type: "auto",
    allowed_formats: ["jpg", "jpeg", "png", "webp", "mp4"],

    transformation: [
      {
        width: 1000,
        height: 1000,
        crop: "limit",
      },
      {
        quality: "auto",
      },
      {
        fetch_format: "auto",
      },
    ],
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 20 * 1024 * 1024},
});

export default upload;