// Import mongoose library
// Mongoose is an ODM (Object Data Modeling) library used to connect Node.js with MongoDB
const mongoose = require("mongoose");

// =====================================================
// Option 1: Ordinary Connection (Promise Based Method)
// =====================================================
// This is the basic way of connecting MongoDB using promises
// It directly calls mongoose.connect() and handles success/error with .then() and .catch()

// const dbconnection = mongoose.connect('mongodb://localhost:27017/sampledb')
// .then(() => {
//     // If connection is successful
//     console.log('Database connected successfully');
// })
// .catch((err) => {
//     // If connection fails
//     console.error('Database connection error:', err);
// });

// =====================================================
// Option 2: Modern Way (Async / Await)
// =====================================================
// This is the modern and recommended way to connect MongoDB
// Async/await makes the code cleaner and easier to read

const dbconnection = async () => {
  try {
    // Try to connect MongoDB database
    // Database name: sampledb
    await mongoose.connect("mongodb://localhost:27017/sampledb");

    // If connection is successful
    console.log("Database connected successfully");

    // readyState shows the current connection status
    // 0 = disconnected
    // 1 = connected
    // 2 = connecting
    // 3 = disconnecting
    console.log("Connection state:", mongoose.connection.readyState);
  } catch (err) {
    // If database connection fails
    console.error("Database connection error:", err);

    // Also show connection state during error
    console.log("Connection state:", mongoose.connection.readyState);
  }
};

// Call the connection function to start MongoDB connection
dbconnection();

// Export connection so it can be used in other files (like index.js)
module.exports = dbconnection;
