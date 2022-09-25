import { createSlice } from "@reduxjs/toolkit";
import { createCheckout } from "../asyncAction/checkout";

const initialState = {
    result: {},
    errorMsg: null,
    successMsg: null,
}

const checkout = createSlice({
    name: 'checkout',
    initialState,
    reducers: {
        resetMessageCheckout: state => {
            state.errorMsg = null;
            state.successMsg = null;
        },
    },
    extraReducers: build => {
        build.addCase(createCheckout.pending, state => {
            state.errorMsg=null;
            state.successMsg=null;
        });
        build.addCase(createCheckout.fulfilled, (state, action) => {
            state.errorMsg = action.payload.errorMsg;
            state.successMsg = action.payload.message;
            state.result = action.payload.results;
        });
    }
})

export {createCheckout};
export const {resetMessageCheckout} = checkout.actions;
export default checkout.reducer;