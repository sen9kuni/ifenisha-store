import { createAsyncThunk } from '@reduxjs/toolkit';
import { http3 } from '../../helpers/http3';
import qs from 'qs';

export const getNotif = createAsyncThunk('/notif/get',async()=>{
    const result = {};
    try{
        const {data} = await http3().get('/notification');
        console.log(data);
        result.data=data.result;
        return result;
    }
    catch(e){
        console.log(e);
        result.error=e.response.data.message;
        return result;
    }
});

export const createNotif = createAsyncThunk('/notif/create',async(request)=>{
    try{
        const send = qs.stringify(request);
        const {data} = await http3().post('/notification',send);
        console.log(data);
    }
    catch(e){
        console.log(e);
    }
});