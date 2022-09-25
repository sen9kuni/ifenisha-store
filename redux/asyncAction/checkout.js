import { createAsyncThunk } from "@reduxjs/toolkit";
import qs from 'qs';
import { http3 } from "../../helpers/http3";

export const createCheckout = createAsyncThunk('checkout/create', async (request) => {
    const result = {};
    try {
        const send = qs.stringify(request);
        const {data} = await http3().post('/checkouts', send);
        return data;
    } catch (error) {
        result.errorMsg = error.response.data.message;
        return result;
    }
});