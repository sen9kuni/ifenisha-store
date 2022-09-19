import { createSlice } from "@reduxjs/toolkit";
import { getProfileCustomer, editEmailCustomer, editProfileCustomer } from "../asyncAction/customer";

const initialState = {
    data: '',
    successmsg: '',
    errormsg: '',
}

export const profileCustomer = createSlice({
    name: 'profileCustumer',
    initialState,
    reducers: {
        resetMsgProfileCos: state => {
            state.successmsg = '';
            state.errormsg = '';
        }
    },
    extraReducers: (build) => {
        build.addCase(getProfileCustomer.pending,(state)=>{
            state.data = '';
        })
        build.addCase(getProfileCustomer.fulfilled,(state,action)=>{
            state.data = action.payload?.value;
        })
        build.addCase(editEmailCustomer.pending,(state)=>{
            state.successmsg=''
            state.errormsg=''
        })
        build.addCase(editEmailCustomer.fulfilled,(state,action)=>{
            state.errormsg = action.payload?.error;
            state.successmsg = action.payload?.success;
        })
        build.addCase(editProfileCustomer.pending,(state)=>{
            state.successmsg=''
            state.errormsg=''
        })
        build.addCase(editProfileCustomer.fulfilled,(state,action)=>{
            state.errormsg = action.payload?.error;
            state.successmsg = action.payload?.success;
        })
    }
})

export default profileCustomer.reducer
export const {resetMsgProfileCos} = profileCustomer.actions