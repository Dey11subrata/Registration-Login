const bcrypt = require("bcryptjs");

const encryptPassword = (userPassword) => {
  const salt = bcrypt.genSaltSync(8);
  const hashedPassword = bcrypt.hashSync(userPassword, salt);
  return hashedPassword;
};

const decryptedPassword = (userPassword, storedPassword) => {
  console.log(userPassword, storedPassword);
  // find user by email first then match password
  return bcrypt.compareSync(userPassword, storedPassword);
};

module.exports = {
  encryptPassword,
  decryptedPassword,
};
