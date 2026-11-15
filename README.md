# 🏋️ Workout Buddy – MERN CRUD + Context

A full-stack **MERN Workout Buddy application** where users can add, view, and delete workouts.

## 🚀 Live Demo

### Frontend
https://task35-workout-buddy-fnfg.vercel.app

### Backend API
https://task35-workout-buddy.onrender.com

---

## 📌 Features

- ➕ Add a new workout
- 📋 View all workouts
- 🗑️ Delete a workout
- 🔄 Workouts displayed with the latest first
- 💾 MongoDB database integration
- ⚛️ React Context API for state management
- 🔁 `useReducer` for managing workout state
- 📱 Responsive layout
- ⚠️ Error handling and validation

---

## 🛠️ Technologies Used

### Frontend
- React
- Vite
- React Context API
- useReducer
- CSS

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- CORS
- dotenv

### Deployment
- Frontend: Vercel
- Backend: Render

---

## 📂 Project Structure

```text
Task35-Workout-Buddy/
│
├── backend/
│   ├── controllers/
│   │   └── workoutController.js
│   ├── models/
│   │   └── Workout.js
│   ├── routes/
│   │   └── workoutRoutes.js
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── WorkoutDetails.jsx
│   │   │   └── WorkoutForm.jsx
│   │   ├── context/
│   │   │   └── WorkoutContext.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## ⚙️ Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/ahsan-ali-dev03/Task35-Workout-Buddy.git
```

```bash
cd Task35-Workout-Buddy
```

---

## 🔧 Backend Setup

Go to the backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file and add:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Start the backend:

```bash
npm run dev
```

The backend will run on:

```text
http://localhost:5000
```

---

## 💻 Frontend Setup

Open a new terminal and go to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the frontend:

```bash
npm run dev
```

The frontend will run on:

```text
http://localhost:5173
```

---

## 🔗 API Endpoints

### Get All Workouts

```text
GET /api/workouts
```

### Create a Workout

```text
POST /api/workouts
```

Example request:

```json
{
  "title": "Chest",
  "load": 50,
  "reps": 10
}
```

### Delete a Workout

```text
DELETE /api/workouts/:id
```

---

## 🧠 State Management

The application uses **React Context API and useReducer** to manage the global workout state.

The state handles:

- Setting workouts fetched from the backend
- Adding a new workout after POST
- Removing a workout after DELETE

---

## 👨‍💻 Author

**Ahsan Ali**

GitHub: https://github.com/ahsan-ali-dev03

---

⭐ If you like this project, please consider giving it a star!