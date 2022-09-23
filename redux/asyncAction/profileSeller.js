import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosServer from '../../helpers/httpServer';
import { http3 } from "../../helpers/http3";
import qs from 'qs';
import { data } from 'autoprefixer';


export const getProfileSeller = createAsyncThunk('seller/profile', async () => {
  const result = {}
  try {
    const {data} = await http3().get('/authenticated-seller/profile/seller');
    return data
  } catch (e) {
    result.errorMsg = e.response.data.message;
    return result;
  }
})

export const editProfileSeller = createAsyncThunk('seller/edit-profile', async param => {
  const result = {}
  try {
    const send = qs.stringify(param)
    const {data} = await http3().patch('/authenticated-seller/profile/seller', send)
    result.successMsg = data.message;
    return result;
  } catch (e) {
    result.error = e.response.data.message;
    return result;
  }
})

export const editEmailSeller = createAsyncThunk('seller/edit-email', async param => {
  const result = {}
  try {
    const send = qs.stringify(param)
    const {data} = await http3().patch('/authenticated-seller/profile/email', send)
    result.successMsg = data.message;
    return result;
  } catch (e) {
    result.errorMsg = e.response.data.message;
    return result;
  }
})

export const editImageSeller = createAsyncThunk('seller/edit-image', async param => {
  const result = {}
  try {
    const file = new FormData()
    file.append('images', param.file)
    const {data} = await http3().patch('/authenticated-seller/profile/seller', file);
    // return data;
    result.successMsg = data.message;
  } catch (e) {
    result.errorMsg = e.response.data.message;
    return result;
  }
})