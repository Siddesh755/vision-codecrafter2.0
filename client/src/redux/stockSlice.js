import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  stock: null, // Holds user data
};

const stockSlice = createSlice({
  name: 'stock',
  initialState,
  reducers: {
    setStock: (state, action) => {
      state.stock = action.payload; // Store user data
    },
    setpurchase: (state,action)=>{
state.purchase =action.payload;
    },
    setsell :(state,action)=>{
state.sell = action.payload
    },
    clearStock: (state) => {
      state.stock = null; // Clear user data on logout
    },
  },
});

export const { setStock, clearStock,setpurchase } = stockSlice.actions;
export default stockSlice.reducer;
