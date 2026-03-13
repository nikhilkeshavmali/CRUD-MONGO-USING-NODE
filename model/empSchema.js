const mongoose = require("mongoose");

const empSchema = new mongoose.Schema({
  empName: String,
  empEmail: {
    type: String,
    unique: true,
    required: true,
  },
  empRole: String,
  isEligible: Boolean,

  // fetch current date and time by default
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

// export and create model
module.exports = mongoose.model("emp", empSchema);
