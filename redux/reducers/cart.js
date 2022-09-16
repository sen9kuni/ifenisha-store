import { createSlice } from '@reduxjs/toolkit';
import { getCart } from '../asyncAction/cart';

const initialState ={
    results: {}
};

const cart = createSlice({
    name: 'cart',
    initialState,
    reducers: {},
    extraReducers: (build)=>{
        build.addCase(getCart.fulfilled, (state, action)=>{
            state.results = action.payload;
        });
    }
});

export {getCart};
export default cart.reducer;