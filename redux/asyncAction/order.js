import { createAsyncThunk } from "@reduxjs/toolkit";
import qs from 'qs';
import { http3 } from "../../helpers/http3";

export const createOrder = createAsyncThunk('order/create', async (request) => {
    const result = {};
    try {
        const send = qs.stringify(request);
        const {data} = await http3().post('/order', send);
        return data;
    } catch (error) {
        result.errorMsg = error.response.data.message;
        return result;
    }
});

export const getOrderHistory = createAsyncThunk('order/history', async (request) => {
    const result = {};
    try {
        // const send = qs.stringify({seller_id: request.seller_id, custumer_id: request.customer_id});
        const {data} = await http3().get(`/order/${request.type}/${request.role}/${request.id}`);
        console.log(data);
        return data;
    } catch (error) {
        result.errorMsg = error.response.data.message;
        return result;
    }
});

export const updateStatusOrder = createAsyncThunk('order/status', async (request) => {
    try {
        const send = qs.stringify({type: request.type});
        const {data} = await http3().patch('/order/'+request.id, send);
        return data;
    } catch (error) {
        result.errorMsg = error.response.data.message;
        return result;
    }
});

export const getDetailOrder = createAsyncThunk('order/detail', async (request) => {
    const result = {};
    try {
        const {data} = await http3().get('/order/details/'+request.id);
        console.log(data);
        return data;
    } catch (error) {
        result.errorMsg = error.response.data.message;
        return result;
    }
});