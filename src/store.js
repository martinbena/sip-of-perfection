import { configureStore } from "@reduxjs/toolkit";
import reservationReducer from "./features/reservation/reservationSlice";

const store = configureStore({
  reducer: {
    reservation: reservationReducer,
  },
});

export default store;
