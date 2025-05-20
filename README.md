
# 🧾 Job Tracker API

A simple yet powerful RESTful API built with **Node.js** and **Express.js** to help users track job applications. Designed for clean code, maintainability, and real-world use.

![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white&style=flat-square)
![Express](https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=white&style=flat-square)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white&style=flat-square)
![JWT](https://img.shields.io/badge/Auth-JWT-orange?style=flat-square)
![License](https://img.shields.io/github/license/chafid/job-tracker-api?style=flat-square)

---

## ✨ Features

- 🔐 **Authentication** – User registration & login with JWT
- 📋 **CRUD Operations** – Create, read, update, delete job entries
- 📊 **Job Status Tracking** – Track `pending`, `interview`, and `declined` applications
- 🧼 **Clean Architecture** – Modular structure with middleware, controllers, and route separation
- 🛡️ **Protected Routes** – Secure job data with authentication middleware
- 🧪 **Validation & Error Handling** – Ensures input safety and provides helpful responses

---

## 🚀 Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (via Mongoose)
- **Authentication:** JWT, bcrypt
- **Validation:** express-validator
- **Utilities:** dotenv, morgan, helmet, cors
- **Dev Tools:** Nodemon, ESLint, Prettier

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Chafid/job-tracker-api.git
cd job-tracker-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables

Create a `.env` file in the root directory based on `.env.example`:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key
```

### 4. Run the Development Server

```bash
npm run dev
```

Server will start on [http://localhost:5000](http://localhost:5000)

---

## 📬 API Reference

### 🔐 Auth Routes

| Method | Endpoint              | Description           |
|--------|-----------------------|-----------------------|
| POST   | `/api/auth/register` | Register new user    |
| POST   | `/api/auth/login`    | Login existing user  |

### 💼 Job Routes (Protected)

| Method | Endpoint                 | Description               |
|--------|--------------------------|---------------------------|
| GET    | `/api/applications`      | Get all user jobs         |
| POST   | `/api/applications`      | Create a new job entry    |

> ⚠️ All `/jobs` routes require a valid JWT token in the `Authorization` header as `Bearer <token>`.

---

## 📁 Project Structure

```
job-tracker-api/
├── controllers/        # Request handlers
├── middleware/         # Auth & error handlers
├── models/             # Mongoose models
├── routes/             # API route definitions
├── utils/              # Utility functions
├── config/             # DB config & setup
├── .env.example        # Sample env vars
├── server.js           # Entry point
└── package.json
```

---

## 🧪 Sample `.env` File

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/jobtracker
JWT_SECRET=yourSecretKey
```

---

## 🧭 Roadmap

- [ ] Swagger API Documentation
- [ ] Pagination & Search Filters
- [ ] Rate Limiting & Security Enhancements
- [ ] CI/CD Integration
- [ ] Deploy to Render / Railway / Vercel backend

---

## 🧑‍💻 About Me

Made by **[Chafid](https://github.com/Chafid)**  
📫 Reach out on [LinkedIn](https://www.linkedin.com/in/chafid-ahmad-b1936450/)  
🌍 Based in Indonesia – Open to remote backend opportunities!

---

## ⭐️ Support the Project

If this project helped you, consider giving it a ⭐️ on GitHub and sharing it with others!
