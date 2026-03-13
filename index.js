const express = require("express");
const app = express();

const HOST = "127.0.0.1";
const PORT = 3000;

// database connection
const dbconnection = require("./config/db");

// model
const empModel = require("./model/empSchema");

// middleware
app.use(express.static("public/assets"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// SET VIEW ENGINE
app.set("view engine", "ejs");

// home page (form)
app.get("/", (req, res) => {
  res.render("home");
});

// save employee
app.post("/saveform", async (req, res) => {
  const empData = new empModel(req.body);

  await empData.save();

  res.redirect("/employees");
});

// employee list
app.get("/employees", async (req, res) => {
  const employees = await empModel.find();

  res.render("employees", { employees });
});

app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});
