// Import mongoose library
// Mongoose is used to interact with MongoDB in Node.js
const mongoose = require("mongoose");

// =====================================================
// 1️⃣ CREATE SCHEMA
// =====================================================
// Schema defines the structure of documents inside MongoDB collection
// It tells MongoDB what fields our employee data will contain

const empSchema = new mongoose.Schema({
  // Employee Name field
  // Data type: String
  empName: String,

  // Employee Email field
  empEmail: {
    // Data type
    type: String,

    // unique:true means two employees cannot have the same email
    // MongoDB will prevent duplicate emails
    unique: true,

    // required:true means this field is mandatory
    // If user does not provide email, MongoDB will throw validation error
    required: true,
  },

  // Employee Role (Developer, Manager, Designer etc.)
  empRole: String,

  // Eligibility status (true / false)
  // Boolean means only two values allowed
  isEligible: Boolean,

  // =====================================================
  // 2️⃣ AUTOMATIC DATE CREATION
  // =====================================================
  // This field automatically stores the date and time
  // when the employee record is created

  createdAt: {
    // Data type: Date
    type: Date,

    // default value will be current date & time
    default: Date.now(),
  },
});

// =====================================================
// 3️⃣ CREATE MODEL
// =====================================================
// Model is used to interact with MongoDB collection

// Syntax:
// mongoose.model("collectionName", schema)

// Here:
// "emp" = collection name in MongoDB
// empSchema = structure of the collection

// Mongoose automatically creates collection: emps
// (plural form)

// =====================================================
// 4️⃣ EXPORT MODEL
// =====================================================
// Export model so we can use it in other files like index.js

module.exports = mongoose.model("emp", empSchema);
