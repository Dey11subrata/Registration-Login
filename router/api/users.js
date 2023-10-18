// @api/user routes handler
// @bringing express to current file to implement its router functionality
const express = require("express");
// @including express's router in our handler
const router = express.Router();
// @user password is required to be encrypted
// @bringing encryption service in this file to implement its encryptPassword functionality
// @library used to achieve it is 'bcryptjs'
const { encryptPassword } = require("../../service/encryption");

// @lookForUser is a helper function that searches and return a user object based on email string provided as an argument to it
// @lookForUser is included here to check proper functionality of retrieving users from database
// @actual use case is not defined for this helper function yet in this file.
const { lookForUser } = require("../../service/loginService");

// @bring User Model inside file so that user persisted into database with a defined schema
const User = require("../../model/User");

// @router      Post api/users
// @desc        Create a new User
// @access      Public
router.post("/", async (req, res) => {
  const newUser = createNewUser(req.body);
  const result = await newUser.save();
  res.json(result);
});

// @createNewUser is a function which creates a new user instance using User Model
// @schema for User class is defined in the User.js file of model directory
const createNewUser = (user) => {
  const newUser = new User({
    userEmail: user.userEmail,
    fullName: user.fullName,
    phoneNumber: user.phoneNumber,
    password: encryptPassword(user.password),
    birthDate: user.birthDate,
    streetAddress: user.streetAddress,
    city: user.city,
    state: user.state,
    pincode: user.pincode,
  });
  return newUser;
};

// @route     GET api/users
// @dessc     fetch all users
// @access    Public
router.get("/", async (req, res) => {
  const result = await User.find();
  res.json(result);
});

// @find particular user by email
router.get("/:userEmail", async (req, res) => {
  console.log(req.params.userEmail);
  const user = await lookForUser(req.params.userEmail);
  console.log("in user.js", user);
  res.json(user);
});

// @update password
// @required for changing password and/or forgot password
// @find user then change the password feild
// @route   POST api/users/update_password

router.post("/update_password", async (req, res) => {
  // find user
  console.log("update password user email:", req.body.userEmail);
  const user = await lookForUser(req.body.userEmail);
  // enter new password
  const newPassword = encryptPassword(req.body.password);
  // put password into database
  await user.updateOne({ password: newPassword });
  console.log("password updated sucessfully...");
  res.json(user);
});

module.exports = router;
