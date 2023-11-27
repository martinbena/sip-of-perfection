import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  date: null,
  numGuests: 2,
  duration: 2,
  name: null,
  preorder: false,
  email: null,
  phone: null,
};

const reservationSlice = createSlice({
  name: "reservation",
  initialState,
  reducers: {
    updateDate(state, action) {
      state.date = action.payload;
    },
  },
});

export const { updateDate } = reservationSlice.actions;

export default reservationSlice.reducer;
