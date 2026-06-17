import { createSlice } from "@reduxjs/toolkit";
import { loginThunk } from "./authThunk";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")) || {},
    token: localStorage.getItem("token") || "",
  },
  extraReducers: (builder) => {
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    });
    builder.addCase(loginThunk.rejected, (state) => {
      state.user = {};
      state.token = "";
    });
  },
});

export default authSlice.reducer;
