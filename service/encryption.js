const bcrypt = require("bcryptjs");

// @function to encrypt password before saving it in database
const encryptPassword = (userPassword) => {
  const salt = bcrypt.genSaltSync(8);
  const hashedPassword = bcrypt.hashSync(userPassword, salt);
  return hashedPassword;
};

// @function to decrypt password and match with the password provided by user to access account
const decryptedPassword = (userPassword, storedPassword) => {
  console.log(userPassword, storedPassword);
  // find user by email first then match password
  return bcrypt.compareSync(userPassword, storedPassword);
};

module.exports = {
  encryptPassword,
  decryptedPassword,
};
