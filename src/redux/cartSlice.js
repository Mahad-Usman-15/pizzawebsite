import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addtoCart: (state, action) => {
      const item = state.find((prod) => prod._id === action.payload._id);
      if (item) {
        item.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removefromCart: (state, action) => {
      return state.filter((prod) => prod._id !== action.payload);
    },
    addquantity: (state, action) => {
      const item = state.find((prod) => prod._id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decreasequantity: (state, action) => {
      const item = state.find((prod) => prod._id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    clearCart: (state) => {
      console.log(`State:${state}`)
      return [];
    },
  },
});

export const { addtoCart, removefromCart, addquantity, decreasequantity, clearCart } =
  CartSlice.actions;

export default CartSlice.reducer;