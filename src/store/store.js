import { configureStore } from "@reduxjs/toolkit";
// import productsReducer from "./slices/products";
import categoryReducer from "./slices/categories";
import cartReducer from "./slices/cart";
import checkOutReducer from "./slices/checkOut";

// import allMatchedProductsReducer from "./slices/allProducts";
import productsReducer from "./slices/products";
// import subCategoryProductsReducer from "./slices/subcategoryproducts";
import subCategoriesReducer from "./slices/subcategory";
import wishListReducer from "./slices/wishList";
import userReducer from './slices/user'
import ordersReducer from './slices/orders'
import oneOrderSlice from './slices/order'
import addressReducer from './slices/userAddress'
export var store = configureStore({
  reducer: {
    products: productsReducer,
    // subCategoryProducts: subCategoryProductsReducer,
    subCategories: subCategoriesReducer,
    categories: categoryReducer,
    cart: cartReducer,
    wishList: wishListReducer,
    checkOut: checkOutReducer,
    // allMatchedProducts: allMatchedProductsReducer,
    user : userReducer,
    orders : ordersReducer,
    oneOrder : oneOrderSlice,
    address : addressReducer

  },
});
