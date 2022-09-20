import { createAsyncThunk } from "@reduxjs/toolkit";
import { http3 } from "../../helpers/http3";
import qs from "qs";

export const getProfileCustomer = createAsyncThunk('/profile/costumer', async(token)=>{
    const results = {};
    try{
        const {data} = await http3(token).get('/authenticated-costumer/profile/customer');
        results.value = data.result;
        return results;
    }
    catch(e){
        console.log(e);
        results.error = e.data.response.messages;
        return results;
    }
})

export const editProfileCustomer = createAsyncThunk('/profile/customer/edit', async({request})=>{
    const results = {}
    try{
        const send = qs.stringify(request);
        const {data} = await http3().patch('/authenticated-costumer/profile/customer',send);
        console.log(data);
        results.success = data.messages;
        return results;
    }
    catch(e){
        console.log(e);
        results.error = data.messages;
        return results;
    }
})

export const editEmailCustomer = createAsyncThunk('/profile/customer/email', async(request)=>{
    const results = {}
    try{
        const send = qs.stringify(request);
        const {data} = await http3().patch('/authenticated-costumer/profile/customer/email',send)
        console.log(data);
        results.success = data.messages
        return results
    }
    catch(e){
        console.log(e);
        results.error = e.data.response.messages;
        return results;
    }
})