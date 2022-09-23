import { createAsyncThunk } from '@reduxjs/toolkit';
import {http3} from '../../helpers/http3';
import qs from 'qs';

export const getCart = createAsyncThunk('cart/getCart', async() => {
    const results = {};
    try {
        const { data } = await http3().get('/cart-all');
        console.log(data);
        results.value = data.result
        return results;    
    } catch (e) {
        console.log(e);
        results.error = e.response.data?.message;
        return results;
    };
});

export const addToCart = createAsyncThunk('cart/addItem', async (request) => {
    const result = {};
    try{
        const send = qs.stringify(request)
        const {data} = await http3().post('/cart',send);
        console.log(data);
        result.success = data.message;
        return result;
    }
    catch(e){
        result.error = e.response.data.message;
        return result;
    }
});