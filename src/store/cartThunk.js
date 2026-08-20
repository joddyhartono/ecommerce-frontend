import {
  addToCart,
  decrementQuantity,
  getCartItems,
  incrementQuantity,
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
  async (cartItemId) => {
    try {
      await removeFromCart(cartItemId);
      return cartItemId;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data);
      }
      throw new Error("Something went wrong");
    }
  },
);

const incrementQuantityThunk = createAsyncThunk(
  "cart/incrementQuantity",
  async (cartItemId) => {
    try {
      const data = await incrementQuantity(cartItemId);
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data);
      }
      throw new Error("Something went wrong");
    }
  },
);

const decrementQuantityThunk = createAsyncThunk(
  "cart/decrementQuantity",
  async (cartItemId) => {
    try {
      const data = await decrementQuantity(cartItemId);
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data);
      }
      throw new Error("Something went wrong");
    }
  },
);

export {
  fetchCartItemsThunk,
  addToCartThunk,
  removeFromCartThunk,
  incrementQuantityThunk,
  decrementQuantityThunk,
};
