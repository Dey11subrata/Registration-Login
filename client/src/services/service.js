import axios from "axios";

export const registerUser = async (user) => {
  const res = await axios.post("/api/users", user);
  return res;
};

export const isEmailRegistered = async (userEmail) => {
  const result = await axios.get(`/api/users/${userEmail}`);
  return result.email !== "null" ? true : false;
};

export const userLogin = async (userCredentials) => {
  const result = await axios.post("/api/login", userCredentials);
  return result;
};
