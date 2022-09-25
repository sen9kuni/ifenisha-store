import { createAsyncThunk } from "@reduxjs/toolkit";
import { http3 } from "../../helpers/http3";

export const getAllPaymentMethod = createAsyncThunk('payment/all', async () => {
    const result = {};
    try {
        const {data} = await http3().get('/payment');
        return data;
    } catch (error) {
        result.errorMsg = error.response.data.message;
        return result;
    }
});