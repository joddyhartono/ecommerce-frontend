import { createSlice } from "@reduxjs/toolkit";
import { addToCartThunk, fetchCartItemsThunk } from "./cartThunk";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCartItemsThunk.fulfilled, (state, action) => {
      state.cartItems = action.payload.items;
    });
    builder.addCase(addToCartThunk.fulfilled, (state, action) => {
      state.cartItems.push(action.payload);
    });
  },
});

export const { setCartItems } = cartSlice.actions;
export default cartSlice.reducer;
