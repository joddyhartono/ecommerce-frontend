import { createSlice } from "@reduxjs/toolkit";
import {
  loginThunk,
  openShopThunk,
  registerThunk,
  updateProfileThunk,
} from "./authThunk";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")) || {},
    token: localStorage.getItem("token") || "",
  },
  reducers: {
    logout: (state) => {
      state.user = {};
      state.token = "";
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
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
    builder.addCase(updateProfileThunk.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(registerThunk.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    });
    builder.addCase(registerThunk.rejected, (state) => {
      state.user = {};
      state.token = "";
    });
    builder.addCase(openShopThunk.fulfilled, (state) => {
      state.user = { ...state.user, isSeller: true };
    });
  },
});

export const { logout } = authSlice.actions;

export const selectLoginData = (state) => {
  return state.auth.user;
};

export default authSlice.reducer;
