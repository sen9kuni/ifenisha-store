import { createSlice } from '@reduxjs/toolkit';
import { getCart,addToCart, deleteCart, updateQuantityCart, updateCartUser } from '../asyncAction/cart';

const initialState ={
    results: [],
    successmsg: '',
    errormsg: '',
    successUpdateMsg: null,
    errorUpdateMsg: null,
    successUpdateCartMsg: null,
    errorUpdateCartMsg: null,
    subTotalPrice: 0,
    saveData: [],
};

const cart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        resetCartMsg: (state) => {
            state.successmsg = '';
            state.errormsg = '';
            state.successUpdateMsg = null;
            state.errorUpdateMsg = null;
            state.successUpdateCartMsg = null;
            state.errorUpdateCartMsg = null;
        },
        saveDataCartUser: (state, action) => {
            // state.subTotalPrice=[action.payload]
            state.saveData.push(action.payload);
        }
    },
    extraReducers: (build)=>{
        build.addCase(getCart.pending,(state)=>{
            state.results = [];
            state.errorUpdateMsg = null;
            state.successUpdateMsg = null;
            state.errorUpdateCartMsg = null;
            state.successUpdateCartMsg = null;
            state.subTotalPrice = 0;
            state.saveData = [];
        });
        build.addCase(getCart.fulfilled,(state,action)=>{
            state.results = action.payload?.value;
            state.errormsg = action.payload?.error;
            const data = action.payload.value;
            data && data?.map(e => state.subTotalPrice += parseInt(e.total_price, 10))
        });
        build.addCase(addToCart.pending,(state)=>{
            state.successmsg = '';
            state.errormsg = '';
        });
        build.addCase(addToCart.fulfilled,(state,action)=>{
            state.successmsg = action.payload?.success;
            state.errormsg = action.payload?.error;
        });
        build.addCase(deleteCart.pending, state => {
            state.errorUpdateMsg = null;
            state.successUpdateMsg = null;
        });
        build.addCase(deleteCart.fulfilled, (state, action) => {
            state.errorUpdateMsg = action.payload.errorMsg;
            state.successUpdateMsg = action.payload.message;
        });
        build.addCase(updateQuantityCart.pending, state => {
            state.errorUpdateMsg = null;
            state.successUpdateMsg = null;
        });
        build.addCase(updateQuantityCart.fulfilled, (state, action) => {
            state.errorUpdateMsg = action.payload.errorMsg;
            state.successUpdateMsg = action.payload.message;
        });
        build.addCase(updateCartUser.pending, state => {
            state.errorUpdateCartMsg = null;
            state.successUpdateCartMsg = null;
        });
        build.addCase(updateCartUser.fulfilled, (state, action) => {
            state.errorUpdateCartMsg = action.payload.errorMsg;
            state.successUpdateCartMsg = action.payload.message;
        });
    }
});

export {getCart, deleteCart, updateQuantityCart, updateCartUser};
export const {resetCartMsg, saveDataCartUser} = cart.actions;
export default cart.reducer;