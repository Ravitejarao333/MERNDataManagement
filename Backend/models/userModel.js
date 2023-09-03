const mongoose = require("mongoose");
const { route } = require("../routes/userRoute");

const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    age: {
      type: Number,
    }, 
  },
  { timestamps: true}
);

//Create Model
const User = mongoose.model('User', userSchema);

module.exports = User;