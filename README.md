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

<img width="1920" height="1080" alt="Screenshot 2026-04-01 124641" src="https://github.com/user-attachments/assets/9123eeac-0b2a-4088-97ca-744949a73d07" />

GET ALL BLOGS

<img width="1920" height="1080" alt="Screenshot 2026-04-01 125125" src="https://github.com/user-attachments/assets/abec27b2-dde5-4d01-a47b-f39e71ec329c" />

GET SINGLE BLOG

<img width="1920" height="1080" alt="Screenshot 2026-04-01 141002" src="https://github.com/user-attachments/assets/39c0d6db-845a-4842-bf59-3bc4e63f36a1" />

UPDATE BLOG

<img width="1920" height="1080" alt="Screenshot 2026-04-01 141240" src="https://github.com/user-attachments/assets/42f249c8-8099-42fc-9d2f-10960939088f" />

DELETE BLOG 

<img width="1920" height="1080" alt="Screenshot 2026-04-01 141656" src="https://github.com/user-attachments/assets/fb442b1c-0b4a-4cf0-9932-02d39ec41dfa" />



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
