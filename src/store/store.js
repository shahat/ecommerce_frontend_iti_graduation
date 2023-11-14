import { configureStore } from "@reduxjs/toolkit";
// import productsReducer from "./slices/products";
import categoryReducer from "./slices/categories";
import cartReducer from "./slices/cart";
import checkOutReducer from "./slices/checkOut";

// import allMatchedProductsReducer from "./slices/allProducts";
import productsReducer from "./slices/products";
// import subCategoryProductsReducer from "./slices/subcategoryproducts";
import subCategoriesReducer from "./slices/subcategory";
import userReducer from './slices/user'
import ordersReducer from './slices/orders'
import oneOrderSlice from './slices/order'
export var store = configureStore({
  reducer: {
    products: productsReducer,
    // subCategoryProducts: subCategoryProductsReducer,
    subCategories: subCategoriesReducer,
    // products: productsReducer,
    categories: categoryReducer,
    cart: cartReducer,
    checkOut: checkOutReducer,
    // allMatchedProducts: allMatchedProductsReducer,
    user : userReducer,
    orders : ordersReducer,
    oneOrder : oneOrderSlice,
  },
});
