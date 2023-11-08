import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/user'
import ordersReducer from './slices/orders'
import orderReducer from './slices/order'
export var store = configureStore({
  reducer: {
    user : userReducer,
    orders : ordersReducer,
    order : orderReducer
  },
});
