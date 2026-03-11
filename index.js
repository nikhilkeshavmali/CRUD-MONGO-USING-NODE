// Import express framework
const express = require("express");
const app = express();

// Server host and port
const HOST = "127.0.0.1";
const PORT = 3000;

// =======================
// Middleware
// =======================

// Serve static files from public/assets folder
app.use(express.static("public/assets"));

// Parse form data (application/x-www-form-urlencoded)
app.use(express.urlencoded({ extended: true }));

// =======================
// Database Connection
// =======================

// Import MongoDB connection file
const dbconnection = require("./config/db");

// =======================
// Import Employee Model
// =======================
const empModel = require("./model/empSchema");

// =======================
// Set EJS as View Engine
// =======================
app.set("view engine", "ejs");

// =======================
// Home Route
// =======================

// Render employee registration form
app.get("/", (req, res) => {
  res.render("home"); // just "home" is enough
});

// =======================
// CREATE (Save Employee)
// =======================
app.post("/employee", async (req, res) => {
  try {
    // Convert checkbox value to Boolean
    if (req.body.isEligible === "true") {
      req.body.isEligible = true;
    } else {
      req.body.isEligible = false;
    }

    // Create new employee object using form data
    const empData = new empModel(req.body);

    // Save employee data into MongoDB
    await empData.save();

    // Redirect to employee list after saving
    res.redirect("/employees");
  } catch (err) {
    console.error("Error saving employee data:", err);
    res.send("Error saving employee data");
  }
});

// =======================
// READ (Get All Employees)
// =======================
app.get("/employees", async (req, res) => {
  try {
    // Get all employees from DB
    const employees = await empModel.find();

    // Pass employees array to employees.ejs
    res.render("employees", { employees });
  } catch (err) {
    console.error("Error fetching employees:", err);
    res.send("Error fetching employees");
  }
});

// =======================
// Start Server
// =======================
app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});
