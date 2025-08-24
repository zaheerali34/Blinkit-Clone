import { configureStore } from "@reduxjs/toolkit";
import SearchSlice from "../Features/SearchSlice";

export const store = configureStore({
  reducer: {
    search: SearchSlice,
  },
});
