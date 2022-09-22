import { createSlice } from '@reduxjs/toolkit';
import { getCart } from '../asyncAction/cart';

const initialState ={
    results: {},
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
        build.addCase(getCart.fulfilled, (state, action)=>{
            state.results = action.payload;
        });
    }
});

export {getCart};
export default cart.reducer;