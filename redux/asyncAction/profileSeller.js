import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosServer from '../../helpers/httpServer';
import { http3 } from '../../helpers/http3';
import qs from 'qs';
import { data } from 'autoprefixer';


export const getProfileSeller = createAsyncThunk('seller/profile', async () => {
  const result = {}
  try {
    const {data} = await http3().get('/authenticated-seller/profile/seller');
    return data
  } catch (e) {
    result.errorMsg = error.response.data.message;
    return result;
  }
})

export const editProfileSeller = createAsyncThunk('seller/edit-profile', async param => {
  const result = {}
  // const token = param.token
  const dataEdit = {}
  dataEdit.full_name = param.full_name !== undefined || param.full_name !== null && param.full_name;
  dataEdit.gender = param.gender !== undefined || param.gender !== null && param.gender;
  // dataEdit.image = param.image !== undefined || param.image !== null && param.image;
  dataEdit.store_name = param.image !== undefined || param.image !== null && param.image;
  dataEdit.store_desc = param.store_desc !== undefined || param.store_desc !== null && param.store_desc;
  try {
    const send = qs.stringify(dataEdit)
    const {data} = await http3().patch('/authenticated-seller/profile/seller', send)
    return data;
  } catch (e) {
    result.errorMsg = error.response.data.message;
    return result;
  }
})

export const editImageSeller = createAsyncThunk('seller/edit-image', async param => {
  const result = {}
  try {
    const file = new FormData()
    file.append('picture', param.file)
    const {data} = await http3().patch('/authenticated-seller/profile/seller', file, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },);
    return data;
  } catch (e) {
    result.errorMsg = error.response.data.message;
    return result;
  }
})