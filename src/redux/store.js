import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";


const loadState = () => {
  try {
    const savedState = localStorage.getItem("cart");  //This makes a localstorage array
    return savedState ? JSON.parse(savedState) : []; //this coverts the array into object 
  } catch {
    return [];
  }
};


const saveState = (state) => {
  try {
    localStorage.setItem("cart", JSON.stringify(state.cart));  //this catch the state
  } catch (error){
    console.log(error)
  }
};

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: {
    cart: loadState(),
  },
});

// Subscribe to state changes
store.subscribe(() => {
  saveState(store.getState());
});
