// @api/login routing handler

// @bringing express to current file to implement its router functionality
const express = require("express");
// @including express's router in our handler
const router = express.Router();
const { userLogin } = require("../../service/loginService");

// @url:    POST /api/login
// @desc    validate credentials and allow/deny access
// @access  Public
router.post("/", async (req, res) => {
  console.log("login.js:", req.body);
  const result = await userLogin(req.body);
  console.log(result);
  res.send(result);
});

module.exports = router;
