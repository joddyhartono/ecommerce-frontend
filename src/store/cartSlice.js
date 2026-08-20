import { createSlice } from "@reduxjs/toolkit";
import {
  addToCartThunk,
  fetchCartItemsThunk,
  removeFromCartThunk,
} from "./cartThunk";

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
    builder.addCase(removeFromCartThunk.fulfilled, (state, action) => {
      state.cartItems = state.cartItems.filter((cartItem) => {
        return cartItem.id !== action.payload;
      });
    });
  },
});

export const { setCartItems } = cartSlice.actions;
export default cartSlice.reducer;
