import { createSlice } from "@reduxjs/toolkit";
import { getAllPaymentMethod } from "../asyncAction/payment";

const initialState = {
    results: [],
    errorMsg: null,
    successMsg: null,
}

const payment = createSlice({
    name: 'checkout',
    initialState,
    reducers: {},
    extraReducers: build => {
        build.addCase(getAllPaymentMethod.pending, state => {
            state.errorMsg=null;
            state.successMsg=null;
            state.results = [];
        });
        build.addCase(getAllPaymentMethod.fulfilled, (state, action) => {
            state.errorMsg = action.payload.errorMsg;
            state.successMsg = action.payload.message;
            state.results = action.payload.result;
        });
    }
})

export {getAllPaymentMethod};
export default payment.reducer;