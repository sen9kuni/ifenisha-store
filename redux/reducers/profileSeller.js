import { createSlice } from "@reduxjs/toolkit";
import { editEmailSeller, editProfileSeller, getProfileSeller } from "../asyncAction/profileSeller";

const initialState = {
  dataSeller: '',
  successMsg: '',
  errorMsg: '',
}

export const profileSeller = createSlice({
  name: 'profileSeller',
  initialState,
  reducers: {
    resetMsgSeller: state => {
      state.successMsg = null
      state.errorMsg = null
    }
  },
  extraReducers: (build) => {
    build.addCase(getProfileSeller.pending, (state) => {
      state.successMsg = null
      state.errorMsg = null
    })
    build.addCase(getProfileSeller.fulfilled, (state, action) => {
      state.successMsg = action.payload.message
      state.errorMsg = action.payload.errorMsg
      state.dataSeller = action.payload.result
    })

    build.addCase(editProfileSeller.pending, (state) => {
      state.successMsg = null
      state.errorMsg = null
    })
    build.addCase(editProfileSeller.fulfilled, (state, action) => {
      state.successMsg = action.payload.message
      state.errorMsg = action.payload.errorMsg
    })

    build.addCase(editEmailSeller.pending, (state) => {
      state.successMsg = null
      state.errorMsg = null
    })
    build.addCase(editEmailSeller.fulfilled, (state, action) => {
      state.successMsg = action.payload.message
      state.errorMsg = action.payload.errorMsg
    })
  }
})

export const {resetMsgSeller} = profileSeller.actions;
export {getProfileSeller, editProfileSeller, editEmailSeller}
export default profileSeller.reducer