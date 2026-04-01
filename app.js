import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js";
import HttpError from "./middleware/httpError.js";
import blogRoutes from "./routes/blogRoutes.js"; 

dotenv.config({ path: "./.env" });

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/blogs", blogRoutes); 

// Home Route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Blog API is running successfully 📝",
  });
});

// 404 Handler
app.use((req, res, next) => {
  next(new HttpError("Requested route not found", 404));
});

// Global Error Handler
app.use((error, req, res, next) => {
  res.status(error.statusCode || 500).json({
    success: false,
    message: error.message || "Internal Server Error",
  });
});

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

startServer();

export default app;