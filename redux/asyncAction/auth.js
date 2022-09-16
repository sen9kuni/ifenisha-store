import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosServer from '../../helpers/httpServer';
import qs from 'qs';

export const register = createAsyncThunk('auth/register',async(request)=>{
    const results={};
    try{
        const send = qs.stringify(request);
        const {data} =await axiosServer.post('/register',send);
        window.alert(data.message);
        results.msg=data.message;
        return results;
    }
    catch(e){
        window.alert(e.response.data.message);
        results.msg=e.response.data.message;
        return results;
    }
});

export const login = createAsyncThunk('auth/login',async(request)=>{
    const results = {};
    try{
        const send = qs.stringify(request);
        const {data} =await axiosServer.post('login',send);
        console.log(data);
        results.token= data.result.token;
        results.id=data.result.id;
        results.role=data.result.role;
        results.msg=data.message;
        return results;
    }
    catch(e){
        console.log(e);
        window.alert(e.response.data.message);
        results.msg=e.response.data.message;
        return results;
    }
});

