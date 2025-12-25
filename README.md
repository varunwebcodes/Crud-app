# CRUD App (React + Vite)

A simple **CRUD (Create, Read, Update, Delete)** application built with **React**, **Vite**, **React Router**, **Axios**, and **Tailwind CSS**.  
This app allows users to create, view, update, and delete user records, using **json‑server** as a mock backend.

---

## 📌 Features

- 🟢 **Create User**  
- 👁️ **Read All Users**  
- 📄 **View Single User Details**  
- ✏️ **Update User**  
- 🗑️ **Delete User**  
- 💅 Styled UI with **Tailwind CSS**

---

## 🧰 Technologies Used

- ⚛️ **React** (Frontend)
- 🔁 **React Router** (Client routing)
- 📡 **Axios** (HTTP requests)
- 🎨 **Tailwind CSS** (Styling)
- 📦 **Vite** (Dev server & bundler)
- 🧪 **json‑server** (Mock REST API)

---

## 🚀 Demo

> This is a local demo app.  
> Run the app locally to see it in action.

---

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/varunwebcodes/Crud-app.git
cd Crud-app

2. Install dependencies
npm install

3. Install and run json-server

Make sure you have json-server installed globally:

npm install -g json-server


Then start the mock API:

json-server --watch db.json --port 3001


This serves your REST API at:

http://localhost:3001/users

4. Start the React app
npm run dev


Open your browser and visit:

http://localhost:5173

📁 Project Structure
├─ public/
├─ src/
│   ├─ components/
│   ├─ pages/
│   ├─ App.jsx
│   ├─ main.jsx
├─ db.json
├─ package.json
├─ vite.config.js
└─ README.md

📝 What You Can Do

✔ Add users
✔ See a list of all users
✔ View an individual user
✔ Edit user details
✔ Delete a user

👨‍💻 How It Works

json‑server acts as a local REST API.

Axios makes API calls to:

GET /users – list users

GET /users/:id – single user

POST /users – create user

PUT /users/:id – update user

DELETE /users/:id – delete user

React Router handles page navigation without reloads.

📫 Contact

Created by varunwebcodes

Happy Learning! 🚀
