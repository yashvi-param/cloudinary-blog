📝 Blog API (Node.js + Express + MongoDB)

This is a Blog API built using Node.js, Express, and MongoDB. It allows you to manage blog posts with proper routing, error handling, and database connection.

🚀 Features
Create, read, update, and delete blogs
RESTful API structure
MongoDB database integration
Centralized error handling
Environment variable configuration
CORS enabled
📁 Project Structure
project/
│
├── config/
│   └── db.js
├── middleware/
│   └── httpError.js
├── routes/
│   └── blogRoutes.js
├── .env
├── app.js
└── package.json
⚙️ Installation
Clone the repository:
git clone <your-repo-url>
cd blog-project
Install dependencies:
npm install

screenshot:

HOME ROUTE
<img width="1920" height="1080" alt="Screenshot 2026-04-01 113908" src="https://github.com/user-attachments/assets/adba4357-e8a9-4dbb-bee3-2d5c4b01ab7a" />

CREATE BLOG


🔑 Environment Variables

Create a .env file in the root folder and add:

PORT=5000
MONGO_URI=your_mongodb_connection_string
▶️ Running the Project

Start the development server:

npm run dev

Server will run on:

http://localhost:5000
📌 API Endpoints
Base URL
http://localhost:5000
Routes
✅ Health Check
GET /

Response:

{
  "message": "Blog API is running successfully 📝"
}
📚 Blog Routes
/blogs
Method	Endpoint	Description
GET	/blogs	Get all blogs
GET	/blogs/:id	Get single blog
POST	/blogs	Create new blog
PUT	/blogs/:id	Update blog
DELETE	/blogs/:id	Delete blog
🧠 Middleware
CORS → Enables cross-origin requests
express.json() → Parses JSON request body
Custom Error Handler → Handles all errors in one place
❌ Error Handling
404 for unknown routes
Global error handler for server issues

Example:

{
  "success": false,
  "message": "Requested route not found"
}
🛠️ Technologies Used
Node.js
Express.js
MongoDB
dotenv
cors
nodemon
📦 Scripts
npm run dev   # Start server with nodemon
📌 Notes
Make sure MongoDB Atlas IP is whitelisted
Keep your .env file secure
Do not push .env to GitHub
