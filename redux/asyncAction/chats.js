import { createAsyncThunk } from '@reduxjs/toolkit';
import {http3} from '../../helpers/http3';
import qs from 'qs';

export const sending = createAsyncThunk('/chat/sending',async(request)=>{
    const result = {};
    try{
        const send = qs.stringify(request);
        const {data} = await http3().post('/chat/content',send);
        console.log(data);
        result.text = data.content;
        return result;
    }
    catch(e){
        console.log(e);
        result.error = e;
        return result;
    }
});

export const createChat = createAsyncThunk('chat/firstChat',async(request)=>{
    const result = {};
    try{
        const send = qs.stringify(request);
        const {data} = await http3().post('/chats',send);
        console.log(data);
        result.msg = data.message;
        return result;
    }
    catch(e){
        console.log(e);
    }
});

export const getChatting = createAsyncThunk('/chat/getChat',async({id})=>{
    const result = {};
    try{
        const {data} = await http3().get(`/chat/content/${id}`);
        console.log(data);
        result.chat = data.result;
        return result;
    }
    catch(e){
        result.error=e;
        console.log(e);
        return result;
    }
});

export const getAllChat = createAsyncThunk('/chats/allChat',async()=>{
    const result = {};
    try{
        const {data} = await http3().get('/chats');
        console.log(data);
        result.allchat = data.result;
        return result;
    }
    catch(e){
        console.log(e);
        result.error=e;
        return result;
    }
});