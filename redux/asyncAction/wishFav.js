import { createAsyncThunk } from '@reduxjs/toolkit';
import {http3} from '../../helpers/http3';
import qs from 'qs';

// get semua wish dan favorite, kalu di favorite saat map tambah kondisi is_favorite true 
export const getAllWishFav = createAsyncThunk('wish-fav/all', async (page) => {
  const result = {}
  try {
    const {data} = await http3().get(`wishlist-all?page=${page}&limit=5`)
    return data
  } catch (e) {
    result.message = e.response.data?.message;
    return result;
  }
})

// membuat create wishlist dan favorite secara bersamaan
export const createWishFav = createAsyncThunk('wish-fav/create', async (param) => {
  const result = {}
  try {
    const send = qs.stringify(param)
    const {data} = await http3().post('create-wishlist', send)
    result.successMsg = data.message;
    return result;
  } catch (e) {
    result.errorMsg = e.response.data?.message;
    return result;
  }
})

// delete wishlist dan favorite secara bersamaan
export const deleteWishFav = createAsyncThunk('wish-fav/delete', async (id) => {
  const result = {}
  try {
    const {data} = await http3().delete(`wishlist/${id}`)
    result.successMsg = data.message;
    return result;
  } catch (e) {
    result.errorMsg = e.response.data?.message;
    return result;
  }
})

// meng update favorite menjadi true ataupun false
export const updateFav = createAsyncThunk('wih-fav/update-fav', async (param) => {
  const result = {}
  try {
    const send = qs.stringify({is_favorite: param.is_favorite})
    const {data} = await http3().patch(`wishlist/${param.id}`, send)
    result.successMsg = data.message;
    return result;
  } catch (e) {
    result.errorMsg = e.response.data?.message;
    return result;
  }
})

// check apa product masuk wishlist
export const getInfoWish = createAsyncThunk('wish-fav/info-wishfav', async (param) => {
  const result = {}
  try {
    const {data} = await http3().get(`wishlist/${param}`)
    return data
  } catch (e) {
    result.errorMsg = e.response.data?.message;
    return result;
  }
})