const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const encryptPassword = (userPassword) => {
  const salt = bcrypt.genSaltSync(8);
  const hashedPassword = bcrypt.hashSync(userPassword, salt);
  return hashedPassword;
};

// bring User Model here

const User = require("../../model/User");

// @router      Post api/users
// @desc        Create a new User
// @access      Public

router.post("/", async (req, res) => {
  const newUser = createNewUser(req.body);
  const result = await newUser.save();
  res.json(result);
});

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

// find particular user by email

router.get("/:userEmail", async (req, res) => {
  console.log(req.params.userEmail);
  const user = await User.findOne({ userEmail: req.params.userEmail });
  res.json(user);
});

module.exports = router;
