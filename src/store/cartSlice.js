import { createSlice } from "@reduxjs/toolkit";
import {
  addToCartThunk,
  decrementQuantityThunk,
  fetchCartThunk,
  incrementQuantityThunk,
  removeFromCartThunk,
} from "./cartThunk";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    id: null,
    items: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCartThunk.fulfilled, (state, action) => {
      state.id = action.payload.id;
      state.items = action.payload.items;
    });
    builder.addCase(addToCartThunk.fulfilled, (state, action) => {
      state.items.push(action.payload);
    });
    builder.addCase(removeFromCartThunk.fulfilled, (state, action) => {
      state.items = state.items.filter((item) => {
        return item.id !== action.payload;
      });
    });
    builder.addCase(incrementQuantityThunk.fulfilled, (state, action) => {
      state.items = state.items.map((item) =>
        item.id === action.payload.id ? action.payload : item,
      );
    });
    builder.addCase(decrementQuantityThunk.fulfilled, (state, action) => {
      state.items = state.items.map((item) =>
        item.id === action.payload.id ? action.payload : item,
      );
    });
  },
});

export default cartSlice.reducer;
