import { configureStore } from "@reduxjs/toolkit";
import SearchSlice from "../Features/SearchSlice";
import CartSlice from "../Features/CartSlice";

export const store = configureStore({
  reducer: {
    search: SearchSlice,
    cart: CartSlice,
  },
});
