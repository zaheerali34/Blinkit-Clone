import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "../Features/itemSlice";

export const store = configureStore({
  reducer: {
    cartItem: itemSlice,
  },
});
