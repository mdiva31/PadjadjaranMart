import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    userId: null,
    amount: 0,
    address: null,
    products: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    addOrderStart: (state) => {
      state.isFetching = true;
    },
    addOrderSuccess: (state, action) => {
      state.isFetching = false;
      state.userId = action.payload;
      state.amount = action.payload;
      state.address = action.payload;
      state.products.push(action.payload);
    },
    addOrderFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {  addOrderStart, addOrderFailure, addOrderSuccess } = orderSlice.actions;
export default orderSlice.reducer;
