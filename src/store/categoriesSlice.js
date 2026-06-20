import { createSlice } from "@reduxjs/toolkit";
import categoriesThunk from "./categoriesThunk";

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(categoriesThunk.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(categoriesThunk.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = "succeeded";
      state.error = null;
    });
    builder.addCase(categoriesThunk.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export default categoriesSlice.reducer;
