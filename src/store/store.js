import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/products";
export var store = configureStore({
  reducer: {
    products: productsReducer,
  },
});
