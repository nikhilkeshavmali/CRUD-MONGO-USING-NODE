// Import express framework
const express = require("express");

// Create express application
const app = express();

// Server configuration
const HOST = "127.0.0.1";
const PORT = 3000;

// ------------------------------
// 1️⃣ DATABASE CONNECTION
// ------------------------------
// This file connects our Node.js application to MongoDB
const dbconnection = require("./config/db");

// ------------------------------
// 2️⃣ IMPORT MONGOOSE MODEL
// ------------------------------
// This model represents the Employee collection in MongoDB
const empModel = require("./model/empSchema");

// ------------------------------
// 3️⃣ MIDDLEWARE
// ------------------------------

// Serve static files like CSS, images, JS
app.use(express.static("public/assets"));

// Parse form data coming from HTML forms
// Example: <input name="empName">
app.use(express.urlencoded({ extended: true }));

// Parse JSON data (useful for APIs)
app.use(express.json());

// ------------------------------
// 4️⃣ SET VIEW ENGINE
// ------------------------------
// Tells Express to use EJS template engine
// Now we can render .ejs files from the views folder
app.set("view engine", "ejs");

// ======================================================
// CRUD OPERATIONS START HERE
// ======================================================

// ------------------------------
// 5️⃣ HOME ROUTE (FORM PAGE)
// ------------------------------
// This route loads the employee registration form
// URL → http://127.0.0.1:3000
app.get("/", (req, res) => {
  res.render("home");
});

// ------------------------------
// 6️⃣ CREATE OPERATION
// ------------------------------
// This route handles form submission
// It creates a new employee in MongoDB
app.post("/saveform", async (req, res) => {
  // Create a new employee object using form data
  const empData = new empModel(req.body);

  // Save employee data to MongoDB
  await empData.save();

  // After saving, redirect to employee list page
  res.redirect("/employees");
});

// ------------------------------
// 7️⃣ DELETE OPERATION
// ------------------------------
// This route deletes an employee from MongoDB
// URL example: /delete/6873hdsjdh
app.get("/delete/:id", async (req, res) => {
  try {
    // Get employee id from URL parameter
    const empId = req.params.id;

    // Delete employee using MongoDB _id
    await empModel.findByIdAndDelete(empId);

    // Redirect back to employee list page
    res.redirect("/employees");
  } catch (error) {
    console.log(error);
  }
});

// ------------------------------
// 8️⃣ EDIT PAGE (READ SINGLE RECORD)
// ------------------------------
// This route fetches employee data and opens edit form
// URL example: /edit/6873hdsjdh
app.get("/edit/:id", async (req, res) => {
  // Get employee id from URL
  const empId = req.params.id;

  // Fetch employee data from MongoDB
  const employee = await empModel.findById(empId);

  // Send employee data to edit.ejs page
  res.render("edit", { employee });
});

// ------------------------------
// 9️⃣ UPDATE OPERATION
// ------------------------------
// This route updates employee data after editing
app.post("/update/:id", async (req, res) => {
  // Get employee id
  const empId = req.params.id;

  // Convert checkbox value to boolean
  req.body.isEligible = req.body.isEligible === "true";

  // Update employee data in MongoDB
  await empModel.findByIdAndUpdate(empId, req.body);

  // Redirect to employee list page
  res.redirect("/employees");
});

// ------------------------------
// 🔟 READ OPERATION (SHOW ALL EMPLOYEES)
// ------------------------------
// This route fetches all employees from database
app.get("/employees", async (req, res) => {
  // Get all employee records
  const employees = await empModel.find();

  // Send employees data to employees.ejs
  res.render("employees", { employees });
});

// ------------------------------
// 1️⃣1️⃣ START SERVER
// ------------------------------
// Start the Express server
app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});
