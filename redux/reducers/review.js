import { createSlice } from "@reduxjs/toolkit"; 
import { getReview } from "../asyncAction/review";

const initialState = {
    data: '',
    successmsg: '',
    errormsg: ''
}

const review = createSlice({
    name: 'review',
    initialState,
    reducers: {
        resetMsgReview: (state) => {
            state.successmsg = ''
            state.errormsg = ''
        }
    },
    extraReducers: (build) => {
        build.addCase(getReview.pending,(state)=>{
            state.data = '';
        });
        build.addCase(getReview.fulfilled,(state,action)=>{
            state.data = action.payload?.data;
        });
    }
})

export const{resetMsgReview} = review.actions;
export default review.reducer;