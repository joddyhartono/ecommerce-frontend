import { loginUser, registerUser } from "@/services/authService";
import { updateProfile } from "@/services/profileService";
import { openShop } from "@/services/sellerService";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const loginThunk = createAsyncThunk("auth/login", async (form) => {
  try {
    const data = await loginUser(form);
    localStorage.setItem("user", JSON.stringify(data.user));
    localStorage.setItem("token", data.token);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data);
    }
    throw new Error("Something went wrong");
  }
});

const updateProfileThunk = createAsyncThunk("auth/update", async (form) => {
  try {
    const data = await updateProfile(form);
    const user = {
      id: data.id,
      email: data.email,
      name: data.name,
      image: data.image,
    };
    localStorage.setItem("user", JSON.stringify(user));
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data);
    }
    throw new Error("Something went wrong");
  }
});

const registerThunk = createAsyncThunk("auth/register", async (form) => {
  try {
    const data = await registerUser(form);
    localStorage.setItem("user", JSON.stringify(data.user));
    localStorage.setItem("token", data.token);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data);
    }
    throw new Error("Something went wrong");
  }
});

const openShopThunk = createAsyncThunk("auth/openShop", async (form) => {
  try {
    const data = await openShop(form);
    const stored = JSON.parse(localStorage.getItem("user") || "{}");
    localStorage.setItem("user", JSON.stringify({ ...stored, isSeller: true }));
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data);
    }
    throw new Error("Something went wrong");
  }
});

export { loginThunk, updateProfileThunk, registerThunk, openShopThunk };
