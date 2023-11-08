import { configureStore } from "@reduxjs/toolkit";
// import productsReducer from "./slices/products";
import categoryReducer from "./slices/categories";
import cartReducer from "./slices/cart";

// import allMatchedProductsReducer from "./slices/allProducts";
import productsReducer from "./slices/products";
// import subCategoryProductsReducer from "./slices/subcategoryproducts";
import subCategoriesReducer from "./slices/subcategory";
export var store = configureStore({
  reducer: {
    products: productsReducer,
    // subCategoryProducts: subCategoryProductsReducer,
    subCategories: subCategoriesReducer,
    // products: productsReducer,
    categories: categoryReducer,
    cart: cartReducer
    // allMatchedProducts: allMatchedProductsReducer,
  },
});
