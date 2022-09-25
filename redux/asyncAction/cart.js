import { createAsyncThunk } from '@reduxjs/toolkit';
import {http3} from '../../helpers/http3';
import qs from 'qs';

export const getCart = createAsyncThunk('cart/getCart', async() => {
    const results = {};
    try {
        const { data } = await http3().get('/cart-all');
        results.value = data.result
        return results;    
    } catch (e) {
        results.error = e.response.data?.message;
        return results;
    };
});

export const addToCart = createAsyncThunk('cart/addItem', async (request) => {
    const result = {};
    try{
        const send = qs.stringify(request)
        const {data} = await http3().post('/cart',send);
        result.success = data.message;
        return result;
    }
    catch(e){
        result.error = e.response.data.message;
        return result;
    }
});

export const deleteCart = createAsyncThunk('cart/deleteCart', async (id) => {
    const result = {};
    try {
        const {data} = await http3().delete('/cart/'+id);
        return data;
    } catch (error) {
        result.errorMsg = error.response.data.message;
        return result;
    }
})

export const updateQuantityCart = createAsyncThunk('cart/updateQuantity', async (request) => {
    const result = {};
    try {
        const send = qs.stringify({quantity: request.quantity});
        const {data} = await http3().patch(`/cart/${request.id}/quantity/${request.product_id}`, send);
        return data;
    } catch (error) {
        result.errorMsg = error.response.data.message;
        return result;
    }
});

export const updateCartUser = createAsyncThunk('cart/updateCart', async(request) => {
    const result = {};
    try {
        const send = qs.stringify({product_id: request.productId, quantity: request.quantity, coupon_id: request.couponId, shipping: request.shipping})
        const {data} = await http3().patch('/cart/'+request.id, send);
        return data;
    } catch (error) {
        result.errorMsg = error.response.data.message;
        return result;
    }
});