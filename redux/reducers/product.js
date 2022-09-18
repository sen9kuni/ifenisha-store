import { createSlice } from '@reduxjs/toolkit';
import { allCategory, createProduct, deleteProduct, getProductDetail, getProductUser, updateProduct } from '../asyncAction/product';

const initialState = {
    resultCategories: [],
    errorMsg: null,
    successMsg: null,
    errorUpdateMsg: null,
    successUpdateMsg: null,
    resultProduct: [],
    resultProductDetail: {},
    infoPage: {}
};

export const product = createSlice({
    name: 'product',
    initialState,
    reducers: {
        resetUpdateMassage: (state) => {
            state.errorUpdateMsg = null;
            state.successUpdateMsg = null;
        }
    },
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
            state.infoPage = action.payload.pageInfo;
        }),
        build.addCase(getProductDetail.pending, (state) => {
            state.resultProductDetail = {};
            state.errorMsg = null;
            state.successMsg = null;
        }),
        build.addCase(getProductDetail.fulfilled, (state, action) => {
            state.resultProductDetail = action.payload.result;
            state.successMsg = action.payload.message;
            state.errorMsg = action.payload.errorMsg;
            state.errorUpdateMsg = null;
            state.successUpdateMsg = null;
        }),
        build.addCase(updateProduct.pending, (state) => {
            state.errorUpdateMsg = null;
            state.successUpdateMsg = null;
        }),
        build.addCase(updateProduct.fulfilled, (state, action) => {
            state.errorUpdateMsg = action.payload.errorMsg;
            state.successUpdateMsg = action.payload.message;
        }),
        build.addCase(deleteProduct.pending, (state) => {
            state.errorUpdateMsg = null;
            state.successUpdateMsg = null;
        }),
        build.addCase(deleteProduct.fulfilled, (state, action) => {
            state.errorUpdateMsg = action.payload.errorMsg;
            state.successUpdateMsg = action.payload.successMsg;
        });
    }
});
export const {resetUpdateMassage} = product.actions
export {allCategory, createProduct, getProductUser, getProductDetail, updateProduct, deleteProduct};
export default product.reducer;