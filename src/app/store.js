import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";

// Globle store
export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});
