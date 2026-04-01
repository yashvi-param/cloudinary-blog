# 📝 Blog API (Node.js + Express + MongoDB + Cloudinary)

A RESTful Blog API built using **Node.js**, **Express**, and **MongoDB**, with **Cloudinary** integration for image/video uploads.

---

## 🚀 Features

* Create Blog (with image/video upload)
* Get All Blogs
* Get Single Blog
* Update Blog
* Delete Blog
* Cloudinary media storage
* MongoDB integration

---

## 📁 Project Structure

```bash
BLOG PROJECT <br>
│ <br>
├── config/ <br>
│   ├── cloudinary.js <br>
│   └── db.js <br>
│ <br>
├── controllers/ <br>
│   └── blogController.js <br>
│ <br>
├── middleware/ <br>
│   ├── httpError.js <br>
│   └── upload.js <br>
│ <br>
├── model/ <br>
│   └── Blog.js <br>
│ <br>
├── routes/ <br>
│   └── blogRoutes.js <br>
│ <br>
├── .env <br>
├── app.js <br>
├── package.json <br>
```

---

## ⚙️ Installation

```bash
git clone https://github.com/your-username/blog-api.git
cd blog-api
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_uri

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

## ▶️ Run Server

```bash
npm start
```

Server will run on:

```
http://localhost:5000
```

---

## 📡 API Endpoints

| Method | Endpoint            | Description     |
| ------ | ------------------- | --------------- |
| GET    | `/`                 | Check server    |
| POST   | `/blogs/add`        | Create blog     |
| GET    | `/blogs/allBlogs`   | Get all blogs   |
| GET    | `/blogs/:id`        | Get single blog |
| PATCH  | `/blogs/update/:id` | Update blog     |
| DELETE | `/blogs/delete/:id` | Delete blog     |

---

## 🧪 Testing

Use:

* Postman
* Thunder Client

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB (Mongoose)
* Cloudinary
* Multer

---


## 📸 Project Screenshots

### 🟢 Server Running

<img width="1919" height="1018" alt="Screenshot 2026-03-29 171343" src="https://github.com/user-attachments/assets/19adf49d-f809-479d-ac1a-404e19254c4a" />



<br>

### 🟡 Create Blog API

<img width="1915" height="1023" alt="Screenshot 2026-03-29 171408" src="https://github.com/user-attachments/assets/b9ceb47d-9f7e-4317-8b0d-f18151bb55fd" />


<br>

### 🔵 Get All Blogs


<img width="1919" height="1021" alt="Screenshot 2026-03-29 171431" src="https://github.com/user-attachments/assets/23831392-b859-49f9-a2aa-c6dde6fb1519" />

<br>

### 🟣 Get Single Blog


<img width="1915" height="1019" alt="Screenshot 2026-03-29 171456" src="https://github.com/user-attachments/assets/aa2e9791-1a0c-4caa-837b-ac7763fd46fc" />

<br>

### 🟠 Update Blog


<img width="1916" height="1018" alt="Screenshot 2026-03-29 171521" src="https://github.com/user-attachments/assets/5f97c76b-66c2-439a-9979-eb9c9cc6ffe0" />

<br>

### 🔴 Delete Blog


<img width="1917" height="1018" alt="Screenshot 2026-03-29 171535" src="https://github.com/user-attachments/assets/cad3e974-5b17-4a34-b49a-480665003ac6" />

<br>

### ☁️ Cloudinary Storage


<img width="1920" height="921" alt="image" src="https://github.com/user-attachments/assets/bc57afd1-4bfe-4002-9e33-d9d341aba23d" />


<br>
<br>

### 🗄️ MongoDB Database


<img width="1920" height="2630" alt="image" src="https://github.com/user-attachments/assets/78ec4bc3-bd31-44ad-973c-cd4e97676bca" />





