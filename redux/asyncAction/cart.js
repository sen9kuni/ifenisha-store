import { createAsyncThunk } from '@reduxjs/toolkit';
import {http3} from '../../helpers/http3';


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