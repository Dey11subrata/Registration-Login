const User = require("../model/User");
const { decryptedPassword } = require("./encryption");

// @function to check is user registered corresponding to provided email
// @required when authenticating user
// @result of this function allow user to login or not to login
const lookForUser = async (userEmail) => {
  const result = await User.findOne({ userEmail: userEmail });
  console.log("lookForUser:---", result);
  return result;
};

// @function to allow user to loggin
// @check user is registered or not
// @for registered user match the encrypted password with provided password and then, either allow to enter or not allow to enter.
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
