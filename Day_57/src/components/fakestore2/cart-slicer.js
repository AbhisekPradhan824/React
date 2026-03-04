import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartCount: 0,
};

const CartSlicer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cartItems.push(action.payload);
      state.cartCount = state.cartItems.length;
    },
  },
});

export const { addToCart } = CartSlicer.actions;
export default CartSlicer.reducer;
