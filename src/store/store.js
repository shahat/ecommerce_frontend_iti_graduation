import { configureStore } from "@reduxjs/toolkit";
// import productsReducer from "./slices/products";
import categoryReducer from "./slices/categories";
// import allMatchedProductsReducer from "./slices/allProducts";
export var store = configureStore({
  reducer: {
    // products: productsReducer,
    categories: categoryReducer,
    // allMatchedProducts: allMatchedProductsReducer,
  },
});
