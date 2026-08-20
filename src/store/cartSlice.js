import { createSlice } from "@reduxjs/toolkit";
import {
  addToCartThunk,
  decrementQuantityThunk,
  fetchCartItemsThunk,
  incrementQuantityThunk,
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
    builder.addCase(incrementQuantityThunk.fulfilled, (state, action) => {
      state.cartItems = state.cartItems.map((cartItem) =>
        cartItem.id === action.payload.id ? action.payload : cartItem,
      );
    });
    builder.addCase(decrementQuantityThunk.fulfilled, (state, action) => {
      state.cartItems = state.cartItems.map((cartItem) =>
        cartItem.id === action.payload.id ? action.payload : cartItem,
      );
    });
  },
});

export default cartSlice.reducer;
