import axios from "axios";

export const registerUser = async (user) => {
  const res = await axios.post("/api/users", user);
  return res;
};
