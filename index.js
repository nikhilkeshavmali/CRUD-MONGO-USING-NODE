const express = require("express");
const app = express();

const HOST = "127.0.0.1";
const PORT = 3000;

//middleware
app.use(express.static("public/assets")); // serve static files from the 'public/assets' directory

//post method
app.use(express.urlencoded({ extended: true })); // parse URL-encoded bodies (as sent by HTML forms)

//url
var url = require("url");

//database connection
const dbconnection = require("./config/db");

//importing model
const empModel = require("./model/empSchema");

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.post("/saveform", async (req, res) => {
  try {
    const empData = new empModel(req.body);
    await empData.save();
    res.send("Employee data saved successfully");
  } catch (err) {
    console.error("Error saving employee data:", err);
  }
});

app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});
