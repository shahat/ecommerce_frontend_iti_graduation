import { configureStore } from "@reduxjs/toolkit";
// import productsReducer from "./slices/products";
import categoryReducer from "./slices/categories";
import cartReducer from "./slices/cart";
import checkOutReducer from "./slices/checkOut";

// import allMatchedProductsReducer from "./slices/allProducts";
export var store = configureStore({
  reducer: {
    // products: productsReducer,
    categories: categoryReducer,
    cart: cartReducer,
    checkOut: checkOutReducer,
    // allMatchedProducts: allMatchedProductsReducer,
  },
});
