import { createSlice } from "@reduxjs/toolkit"
import { createOrder, getDetailOrder, getOrderHistory, updateStatusOrder } from "../asyncAction/order"

const initialState = {
    result: {},
    results: [],
    errorMsg: null,
    successMsg: null,
    errorUpdateMsg: null,
    successUpdateMsg: null,
}

const order = createSlice({
    name: 'order',
    initialState,
    reducers: {
        resetOrderMsg: state => {
            state.errorUpdateMsg = null;
            state.successUpdateMsg = null;
            state.errorMsg = null;
            state.successMsg = null;
        },
    },
    extraReducers: build => {
        build.addCase(createOrder.pending, state => {
            state.errorMsg = null;
            state.successMsg = null;
        });
        build.addCase(createOrder.fulfilled, (state, action) => {
            state.errorMsg = action.payload.errorMsg;
            state.successMsg = action.payload.message;
            state.result = action.payload.result;
        });
        build.addCase(getOrderHistory.pending, state => {
            state.errorMsg = null;
            state.successMsg = null;
        });
        build.addCase(getOrderHistory.fulfilled, (state, action) => {
            state.errorMsg = action.payload.errorMsg;
            state.successMsg = action.payload.message;
            state.results = action.payload.result;
        });
        build.addCase(updateStatusOrder.pending, state => {
            state.errorUpdateMsg = null;
            state.successUpdateMsg = null;
        });
        build.addCase(updateStatusOrder.fulfilled, (state, action) => {
            state.errorUpdateMsg = action.payload.errorMsg;
            state.successUpdateMsg = action.payload.message;
        });
        build.addCase(getDetailOrder.pending, state => {
            state.errorMsg = null;
            state.successMsg = null;
        });
        build.addCase(getDetailOrder.fulfilled, (state, action) => {
            state.errorMsg = action.payload.errorMsg;
            state.successMsg = action.payload.message;
            state.result = action.payload.result[0];
        });
    }
});

export {createOrder, getDetailOrder, updateStatusOrder, getOrderHistory};
export const {resetOrderMsg} = order.actions;
export default order.reducer;