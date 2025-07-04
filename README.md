# 📝 MERN Blog Website

A full-stack blog application built with the **MERN stack (MongoDB, Express.js, React, Node.js)** and styled using **Tailwind CSS**. The app supports user authentication, blog post creation, editing, image uploads, and more.

---

## Features

- User registration and login with hashed passwords (`bcrypt`)
- JWT-based authentication (`jsonwebtoken`)
- Persistent storage with MongoDB (`mongoose`)
- File/image uploads for blog posts (`multer`)
- Environment variables managed via `.env` (`dotenv`)
- CORS-enabled backend for frontend integration (`cors`)
- Hot-reloading during development (`nodemon`)
- SPA navigation using React Router (`react-router-dom`)
- Fully responsive UI with **Tailwind CSS**

---

## Tech Stack

### Frontend
- React
- Tailwind CSS
- React Router DOM

### Backend
- Node.js
- Express.js
- MongoDB (via Mongoose)
- JWT Authentication
- Multer for image uploads
- Bcrypt for password hashing
- Dotenv for environment configuration
- CORS for cross-origin access

---

## Project Structure

```
mern-blog/
├──  admin/                 # React front-end
│   ├── public/             # Static files
│   ├── src/                # React source code
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── services/       # API services
│   │   ├── context/        # React context providers
│   │   └── App.jsx         # Main application component
│   └── package.json 
├── client/                 # React front-end
│   ├── public/             # Static files
│   ├── src/                # React source code
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── services/       # API services
│   │   ├── context/        # React context providers
│   │   └── App.jsx         # Main application component
│   └── package.json        # Client dependencies
├── server/                 # Express.js back-end
│   ├── config/             # Configuration files
│   ├── controllers/        # Route controllers
│   ├── models/             # Mongoose models
│   ├── routes/             # API routes
│   ├── middleware/         # Custom middleware
│   ├── utils/              # Utility functions
│   ├── server.js           # Main server file
│   └── package.json        # Server dependencies
└── README.md               # Project documentation
```

## Getting Started

---

## 🔧 Installation & Setup

### Prerequisites
- Node.js & npm
- MongoDB (local or cloud)

### Backend Setup

```bash
cd server
npm install

```

### Create a .env file in the server/ directory:
- PORT=5000
- MONGO_URI=your_mongodb_connection_string
- JWT_SECRET=your_jwt_secret

### Start the backend server:
- npm start

### Frontend Setup
- cd client
- npm install

### Start the React development server:
- npm run dev


### API Routes
#### Auth
- POST /api/auth/register

- POST /api/auth/login

#### Blog Posts
- GET /api/posts

- POST /api/posts (protected)

- PUT /api/posts/:id (protected)

- DELETE /api/posts/:id (protected)

#### Blog Posts
- GET /api/category

- POST /api/category (protected)


### Image Upload
- Images for blog posts are handled using multer and stored in the uploads/ folder on the backend.

### Scripts
- Backend (/server)
- npm start — start backend with nodemon

### Frontend (/client)
- npm run dev — start frontend with Vite

### License
- This project is licensed under the MIT License.

### Screenshorts
#### Admin:

![alt text](<Screenshot 2025-07-04 170142.png>)

#### Client:

![alt text](<Screenshot 2025-07-04 165925.png>)
