import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  date: null,
  numGuests: null,
  duration: null,
  name: null,
  preorder: null,
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
    updateGuests(state, action) {
      state.numGuests = action.payload;
    },
    updateDuration(state, action) {
      state.duration = action.payload;
    },
  },
});

export const { updateDate, updateGuests, updateDuration } =
  reservationSlice.actions;

export default reservationSlice.reducer;
