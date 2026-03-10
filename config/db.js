const mongoose = require("mongoose");

// Option 1:Ordinary Connection
// const dbconnection = mongoose.connect('mongodb://localhost:27017/sampledb')
// .then(() => {
//     console.log('Database connected successfully');
// })
// .catch((err) => {
//     console.error('Database connection error:', err);
// });

// Option 2:modern way

const dbconnection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/sampledb");
    console.log("Database connected successfully");

    //readyState is a property of the mongoose connection that indicates the current state of the connection.
    // 0 = disconnected, 1 = connected, 2 = connecting, 3 = disconnecting
    console.log("Connection state:", mongoose.connection.readyState);
  } catch (err) {
    console.error("Database connection error:", err);

    // Log the connection state in case of an error as well
    console.log("Connection state:", mongoose.connection.readyState);
  }
};

dbconnection();

module.exports = dbconnection;
