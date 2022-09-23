import { createSlice } from '@reduxjs/toolkit';
import { createWishFav, deleteWishFav, getAllWishFav, getInfoWish, recoverWishFav, updateFav } from '../asyncAction/wishFav';

const initialState = {
  result: [],
  successMsg: '',
  errorMsg: '',
  infoWishProduct: [],
}

const wishFav = createSlice({
  name: 'wishFav',
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(getAllWishFav.pending, (state) => {
      state.errorMsg = null
      state.successMsg = null
    })
    build.addCase(getAllWishFav.fulfilled, (state, action) => {
      state.successMsg = action.payload.message
      state.errorMsg = action.payload.errorMsg
      if (action.payload.result !== null || action.payload.result !== undefined) {
        state.result = action.payload.result
      }
    })

    build.addCase(createWishFav.pending, (state) => {
      state.errorMsg = null
      state.successMsg = null
    })
    build.addCase(createWishFav.fulfilled, (state, action) => {
      state.successMsg = action.payload.successMsg
      state.errorMsg = action.payload.errorMsg
    })

    build.addCase(deleteWishFav.pending, (state) => {
      state.errorMsg = null
      state.successMsg = null
    })
    build.addCase(deleteWishFav.fulfilled, (state, action) => {
      state.successMsg = action.payload.successMsg
      state.errorMsg = action.payload.errorMsg
    })

    build.addCase(updateFav.pending, (state) => {
      state.errorMsg = null
      state.successMsg = null
    })
    build.addCase(updateFav.fulfilled, (state, action) => {
      state.successMsg = action.payload.successMsg
      state.errorMsg = action.payload.errorMsg
    })

    // build.addCase(getInfoWish.pending, (state) => {
    //   state.errorMsg = null
    //   state.successMsg = null
    // })
    build.addCase(getInfoWish.fulfilled, (state, action) => {
      // state.successMsg = action.payload.message
      state.infoWishProduct = action.payload.result
      state.errorMsg = action.payload.errorMsg
    })
  }
})

export {getAllWishFav, createWishFav, deleteWishFav, updateFav, getInfoWish}
export default wishFav.reducer