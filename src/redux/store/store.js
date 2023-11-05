import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice";
import authReducer from "../features/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: authReducer,
  },
});
