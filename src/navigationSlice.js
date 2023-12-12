import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isNavigationFixed: true,
  navHeight: null,
};

const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    toggleNavFixedPosition(state, action) {
      state.isNavigationFixed = action.payload;
    },
    getCurrentNavHeight(state, action) {
      state.navHeight = action.payload;
    },
  },
});

export default navigationSlice.reducer;

export const { toggleNavFixedPosition, getCurrentNavHeight } =
  navigationSlice.actions;

export const getNavigationPosition = (state) =>
  state.navigation.isNavigationFixed;

export const getNavHeight = (state) => state.navigation.navHeight;
