const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// creating user schema

const UserSchema = new Schema({
  userEmail: {
    type: String,
    require: true,
    unique: true,
  },
  fullName: {
    type: String,
    require: true,
  },
  phoneNumber: {
    type: Number,
    require: true,
  },
  password: {
    type: String,
    required: true,
  },
  birthDate: {
    type: Date,
  },
  streetAddress: {
    type: String,
    required: false,
  },
  city: {
    type: String,
    default: "NA",
  },
  state: {
    type: String,
    default: "NA",
  },
  pincode: {
    type: Number,
    default: "000000",
  },
  registrationDate: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = User = mongoose.model("user", UserSchema);
