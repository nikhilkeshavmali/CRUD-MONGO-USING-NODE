🚀 CRUD-MONGO-USING-NODE

A simple Employee CRUD Application built using Node.js, Express.js, MongoDB, Mongoose, and EJS.

This project demonstrates how to Create, Read, Update, and Delete (CRUD) employee data using a web form and store it in a MongoDB database.

📌 Features

✅ Employee Registration Form

✅ Save Employee Data to MongoDB

✅ View All Employees in Table

✅ Edit Employee Details

✅ Delete Employee Record

✅ Express.js Backend Server

✅ Mongoose Schema & Model

✅ Form Data Handling using POST Request

✅ Dynamic UI using EJS Template Engine

✅ Clean and Simple UI using HTML & CSS

🛠️ Tech Stack

Backend: Node.js, Express.js

Database: MongoDB

ODM: Mongoose

Template Engine: EJS

Frontend: HTML, CSS

📂 Project Structure
CRUD-MONGO-USING-NODE
│
├── config
│   └── db.js                # MongoDB connection
│
├── model
│   └── empSchema.js         # Employee schema
│
├── views
│   ├── home.ejs             # Employee registration form
│   ├── employees.ejs        # Employee list page
│   └── edit.ejs             # Edit employee page
│
├── public                   # Static files (CSS / assets)
│
├── index.js                 # Main server file
├── package.json
├── package-lock.json
└── .gitignore
⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/nikhilkeshavmali/CRUD-MONGO-USING-NODE.git
2️⃣ Go to project folder
cd CRUD-MONGO-USING-NODE
3️⃣ Install dependencies
npm install
4️⃣ Start the server
node index.js

or using nodemon

nodemon index.js
🌐 Run the Project

Open in browser:

http://127.0.0.1:3000
📊 Example Data Stored in MongoDB
{
  "empName": "Nikhil Mali",
  "empEmail": "nikhil@gmail.com",
  "empRole": "Developer",
  "isEligible": true
}
📸 Screenshots
Employee Registration Form
<img width="1912" height="866" alt="image" src="https://github.com/user-attachments/assets/484ad8d7-2546-4794-ba5c-b8dd051223ec" />


Employee List Page

<img width="1918" height="860" alt="image" src="https://github.com/user-attachments/assets/615c4d63-c648-405f-a6f1-b4edc4a8d741" />


Edit Employee Page

<img width="1918" height="863" alt="image" src="https://github.com/user-attachments/assets/18a60b8c-8132-4fc9-a810-0b3963f31d70" />


🎯 Future Improvements

🔹 Search Employee

🔹 Pagination

🔹 Authentication (Login / Signup)

🔹 REST API Integration

🔹 MVC Folder Structure

🔹 Bootstrap UI

👨‍💻 Author

Nikhil Mali

GitHub: https://github.com/nikhilkeshavmali

Aspiring Full Stack Developer

📧 nikhilmali27103@gmail.com

⭐ If you like this project, don't forget to star the repository.
