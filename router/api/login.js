const express = require("express");
const { userLogin } = require("../../service/loginService");
const router = express.Router();

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
