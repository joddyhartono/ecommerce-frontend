import {
  addToCart,
  getCartItems,
  removeFromCart,
} from "@/services/cartService";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchCartItemsThunk = createAsyncThunk(
  "cart/fetchCartItems",
  async () => {
    try {
      const data = await getCartItems();
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data);
      }
      throw new Error("Something went wrong");
    }
  },
);

const addToCartThunk = createAsyncThunk("cart/addToCart", async (productId) => {
  try {
    const data = await addToCart(productId);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data);
    }
    throw new Error("Something went wrong");
  }
});

const removeFromCartThunk = createAsyncThunk(
  "cart/removeFromCart",
  async (productId) => {
    try {
      await removeFromCart(productId);
      return productId;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data);
      }
      throw new Error("Something went wrong");
    }
  },
);

export { fetchCartItemsThunk, addToCartThunk, removeFromCartThunk };
