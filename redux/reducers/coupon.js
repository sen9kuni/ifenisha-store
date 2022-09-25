import { createSlice } from "@reduxjs/toolkit"
import { checkCoupon } from "../asyncAction/coupon"

const initialState = {
    result: {},
    successMsg: null,
    errorMsg: null,
    statusMsg: null,
}

const coupon = createSlice({
    name: 'coupon',
    initialState,
    reducers: {
        resetMessage: state => {
            state.errorMsg = null;
            state.statusMsg = null;
            state.successMsg = null;
        }
    },
    extraReducers: build => {
        build.addCase(checkCoupon.pending, state => {
            state.errorMsg = null;
            state.successMsg = null;
            state.statusMsg = null;
        });
        build.addCase(checkCoupon.fulfilled, (state, action) => {
            state.errorMsg = action.payload.errorMsg;
            state.successMsg = action.payload.message;
            const status = action.payload.success;
            if(status) {
                state.statusMsg = status;
                state.result = action.payload.result;
            }
        });
    }
});

export {checkCoupon};
export const {resetMessage} = coupon.actions;
export default coupon.reducer;