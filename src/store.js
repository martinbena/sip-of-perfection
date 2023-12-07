import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import navigationReducer from "./navigationSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    navigation: navigationReducer,
  },
});

export default store;
