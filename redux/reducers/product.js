import { createSlice } from '@reduxjs/toolkit';
import { allCategory, createProduct, deleteProduct, getProductDetail, getProductUser, updateProduct } from '../asyncAction/product';

const initialState = {
    resultCategories: {},
    errorMsg: null,
    successMsg: null,
    resultProduct: {},
    resultProductDetail: {}
};

export const product = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (build) => {
        build.addCase(allCategory.pending, (state)=> {
            state.errorMsg = null;
            state.successMsg = null;
        }),
        build.addCase(allCategory.fulfilled, (state, action)=>{
            state.resultCategories = action.payload.result;
            state.errorMsg = action.payload.errorMsg;
            state.successMsg = action.payload.message;
        }),
        build.addCase(createProduct.pending, (state)=> {
            state.errorMsg = null;
            state.successMsg = null;
        }),
        build.addCase(createProduct.fulfilled, (state, action)=> {
            state.resultProduct = action.payload.result;
            state.errorMsg = action.payload.errorMsg;
            state.successMsg = action.payload.successMsg;  
        }),
        build.addCase(getProductUser.pending, (state) => {
            state.errorMsg = null;
            state.successMsg = null;
        }),
        build.addCase(getProductUser.fulfilled, (state, action) => {
            state.resultProduct = action.payload.result;
            state.errorMsg = action.payload.errorMsg;
            state.successMsg = action.payload.message;
        }),
        build.addCase(getProductDetail.pending, (state) => {
            state.errorMsg = null;
            state.successMsg = null;
        }),
        build.addCase(getProductDetail.fulfilled, (state, action) => {
            state.resultProductDetail = action.payload.result;
            state.successMsg = action.payload.message;
            state.errorMsg = action.payload.errorMsg;
        }),
        build.addCase(updateProduct.pending, (state) => {
            state.errorMsg = null;
            state.successMsg = null;
        }),
        build.addCase(updateProduct.fulfilled, (state, action) => {
            state.errorMsg = action.payload.errorMsg;
            state.successMsg = action.payload.message;
            state.resultProduct = action.payload.result;
        }),
        build.addCase(deleteProduct.pending, (state) => {
            state.errorMsg = null;
            state.successMsg = null;
        }),
        build.addCase(deleteProduct.fulfilled, (state, action) => {
            state.errorMsg = action.payload.errorMsg;
            state.successMsg = action.payload.message;
            state.resultProduct = action.payload.result;
        });
    }
});

export {allCategory, createProduct, getProductUser, getProductDetail, updateProduct, deleteProduct};
export default product.reducer;