# 💸 Expense Tracker Web Application

A simple and responsive Expense Tracker built with **Node.js**, **Express.js**, and **MongoDB**. This app allows users to add, categorize, and view expenses. All expenses are saved in a MongoDB database for persistence.

## ✨ Features

- Add expenses with name, amount, and category
- Expenses are stored in MongoDB
- Real-time display of total expenses
- RESTful API for submitting and retrieving expenses

## 🧠 Use Cases

This Expense Tracker is ideal for:

- 🧍‍♂️ **Individuals** who want to track daily spending and categorize expenses easily
- 💼 **Students** managing limited budgets or pocket money
- 👨‍👩‍👧‍👦 **Families** looking to monitor household expenses
- 💰 **Freelancers or small business owners** who need a simple tool to log expenses
- 🧪 **Beginner developers** learning full-stack development (Node.js + MongoDB)

---

## 🛠 Tech Stack

- **Frontend**: HTML, CSS, Vanilla JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via Mongoose)


## 📝 File Breakdown

### `/index.html`
This is the main frontend file where the expense input form and dashboard are displayed.

### `/app.css`
The stylesheet for the frontend to make the expense tracker responsive and visually appealing.

### `/app.js`
JavaScript to handle frontend interactions, including submitting expenses via the form and dynamically displaying them on the dashboard.

### `/server.js`
The server file where the Express.js application is created, and middleware and routes are set up.

### `/expense.js`
Mongoose schema for storing expense data in MongoDB, including fields like name, amount, and category.

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-brightgreen)






