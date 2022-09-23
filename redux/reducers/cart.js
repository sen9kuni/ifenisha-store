import { createSlice } from '@reduxjs/toolkit';
import { getCart,addToCart } from '../asyncAction/cart';

const initialState ={
    results: '',
    successmsg: '',
    errormsg: '',
};

const cart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        resetCartMsg: (state) => {
            state.successmsg = '';
            state.errormsg = '';
        }
    },
    extraReducers: (build)=>{
        build.addCase(getCart.pending,(state)=>{
            state.results = '';
        });
        build.addCase(getCart.fulfilled,(state,action)=>{
            state.results = action.payload?.value;
            state.errormsg = action.payload?.error;
        });
        build.addCase(addToCart.pending,(state)=>{
            state.successmsg = '';
            state.errormsg = '';
        });
        build.addCase(addToCart.fulfilled,(state,action)=>{
            state.successmsg = action.payload?.success;
            state.errormsg = action.payload?.error;
        })
    }
});

export {getCart};
export const {resetCartMsg} = cart.actions;
export default cart.reducer;