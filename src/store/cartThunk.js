import { getCartItems } from "@/services/cartService";
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

export { fetchCartItemsThunk };
