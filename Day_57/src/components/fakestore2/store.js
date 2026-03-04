import { configureStore } from "@reduxjs/toolkit";
import CartSlicer from "./cart-slicer";

export default configureStore({
  reducer: {
    store: CartSlicer,
  },
});
