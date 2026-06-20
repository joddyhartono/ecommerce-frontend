import { getCategories } from "@/services/categoryService";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const categoriesThunk = createAsyncThunk("categories/fetch", async () => {
  try {
    const data = await getCategories();
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data);
    }
    throw new Error("Something went wrong");
  }
});

export default categoriesThunk;
