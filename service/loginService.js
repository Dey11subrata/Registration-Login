const User = require("../model/User");
const { decryptedPassword } = require("./encryption");

const lookForUser = async (userEmail) => {
  const result = await User.findOne({ userEmail: userEmail });
  console.log("lookForUser:---", result);
  return result;
};

const userLogin = async (userCredential) => {
  console.log(userCredential);
  const user = await lookForUser(userCredential.userEmail);
  if (user !== null) {
    // check password - decrypt the password and match against the provided password
    console.log("loginService: ", userCredential.password, user.password);
    if (decryptedPassword(userCredential.password, user.password)) {
      console.log("access granted....");
      return true;
    } else {
      console.log("login failed xxx");
      return false;
    }
  }
};

module.exports = {
  lookForUser,
  userLogin,
};
