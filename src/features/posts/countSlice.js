import { createSlice } from "@reduxjs/toolkit";

const initialState = 2;

const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    countAdded: (state, action) => state + 1
  }
});

export const { countAdded } = countSlice.actions;

export default countSlice.reducer;
