import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { loadCart } from "./features/cart/cartSlice";
import navigationReducer from "./navigationSlice";
import reservationReducer from "./features/reservation/reservationSlice";

const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  if (
    action.type === "cart/addItem" ||
    action.type === "cart/deleteItem" ||
    action.type === "cart/increaseItemQuantity" ||
    action.type === "cart/decreaseItemQuantity" ||
    action.type === "cart/clearCart"
  ) {
    localStorage.setItem("cart", JSON.stringify(store.getState().cart.cart));
  }

  return result;
};

const store = configureStore({
  reducer: {
    cart: cartReducer,
    navigation: navigationReducer,
    reservation: reservationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

const savedCart = localStorage.getItem("cart");
if (savedCart) {
  store.dispatch(loadCart(JSON.parse(savedCart)));
}

export default store;
