import { createAsyncThunk } from '@reduxjs/toolkit';
import { http3 } from '../../helpers/http3';

export const checkCoupon = createAsyncThunk('coupon/check', async (request) => {
    const result = {};
    try {
        const {data} = await http3().get('/coupon/'+request.code.toLocaleUpperCase('en-US'));
        return data;
    } catch (error) {
        result.errorMsg = error.response.data.message;
        return result;
    }
});

export const getAllCoupon = createAsyncThunk('coupon/all', async () => {
    const result = {};
    try {
        const {data} = await http3().get('/coupon-all');
        return data;
    } catch (error) {
        result.errorMsg = error.response.data.message;
        return result;
    }
})