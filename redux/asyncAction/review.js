import { createAsyncThunk } from "@reduxjs/toolkit";
import { http3 } from "../../helpers/http3";
import qs from "qs";

export const getReview = createAsyncThunk('/review/showing', async ({idProduct,page})=>{
    const results = {}
    const pages = page ? page: 1 ;
    try{
        const {data} = await http3().get(`review?productId=${idProduct}&page=${pages}`)
        console.log(data);
    }
    catch(err){
        console.log(err);
    }
});