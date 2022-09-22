import { createAsyncThunk } from '@reduxjs/toolkit';
import {http3} from '../../helpers/http3';
import qs from 'qs';

export const getCart = createAsyncThunk('cart/getCart', async() => {
    const result = {};
    try {
        const { data } = await http3().get('/cart');
        return data;
    } catch (e) {
        result.message = e.response.data?.message;
        return result;
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
        result.error = data.message;
        return result;
    }
});