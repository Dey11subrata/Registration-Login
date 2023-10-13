const express = require("express");
const router = express.Router();

// bring User Model here

const User = require("../../model/User");

// @router      Post api/users
// @desc        Create a new User
// @access      Public

router.post("/", async (req, res) => {
  const dummyUser = new User({
    userEmail: req.body.userEmail,
    fullName: req.body.fullName,
    phoneNumber: req.body.phoneNumber,
    password: req.body.password,
    birthDate: req.body.birthDate,
  });
  const result = await dummyUser.save();
  res.json(result);
});

module.exports = router;
