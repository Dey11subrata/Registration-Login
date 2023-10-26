const { createSlice } = require("@reduxjs/toolkit");

const userSlice = createSlice({
  name: "users",
  initialState: {},
  reducers: {
    registerUser(state, action) {},
    getUser(state, action) {},
  },
});

const { registerUser, getUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
