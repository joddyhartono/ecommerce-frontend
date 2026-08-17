import { createSlice } from "@reduxjs/toolkit";
import { fetchCartItemsThunk } from "./cartThunk";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCartItemsThunk.fulfilled, (state, action) => {
      state.cartItems = action.payload.items;
    });
  },
});

export const { setCartItems } = cartSlice.actions;
export default cartSlice.reducer;
