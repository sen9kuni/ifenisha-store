import { createSlice } from '@reduxjs/toolkit';
import { getCart,addToCart, deleteCart, updateQuantityCart } from '../asyncAction/cart';

const initialState ={
    results: [],
    successmsg: '',
    errormsg: '',
    successUpdateMsg: null,
    errorUpdateMsg: null,
    subTotalPrice: 0,
};

const cart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        resetCartMsg: (state) => {
            state.successmsg = '';
            state.errormsg = '';
        },
        setSubTotalPrice: (state, action) => {
            // state.subTotalPrice=[action.payload]
        }
    },
    extraReducers: (build)=>{
        build.addCase(getCart.pending,(state)=>{
            state.results = '';
            state.errorUpdateMsg = null;
            state.successUpdateMsg = null;
            state.subTotalPrice = 0;
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
            // const updateData = action.payload.result;
            // console.log(updateData)
            // const currentData = state.results;
            // if(currentData) {
            //     currentData?.forEach((e, i) => {
            //         if(e.id === updateData.id) {
            //             e.quantity = updateData.quantity;
            //             e.total_price = updateData.total_price;
            //         }
            //     })
            // }
        })
    }
});

export {getCart, deleteCart, updateQuantityCart};
export const {resetCartMsg, setSubTotalPrice} = cart.actions;
export default cart.reducer;