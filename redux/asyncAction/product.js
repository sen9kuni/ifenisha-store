import { createAsyncThunk } from '@reduxjs/toolkit';
import qs from 'qs';
import { http3 } from '../../helpers/http3';

export const allCategory = createAsyncThunk('category/all', async () => {
    const result = {};
    try {
        const {data} = await http3().get('/categories');
        return data;
    } catch (error) {
        result.errorMsg = error.response.data.message;
        return result;
    }
});

export const createProduct = createAsyncThunk('product/add-product', async (request) => {
    const result = {};

    try {
        const dataReq = new FormData();
        dataReq.append('product_name', request.nameProduct);
        dataReq.append('description', request.descProduct);
        dataReq.append('price', request.priceProduct);
        dataReq.append('stock', request.stockProduct);
        dataReq.append('stock_condition', request.condition);
        dataReq.append('color', request.color);
        dataReq.append('brand', request.brandProduct);
        dataReq.append('category_id', request.categoryId);
        dataReq.append('sku', request.skuNumber);
        if(request.images.length>=1) {
            request.images.forEach(element => {
                dataReq.append('images', element);
            });
        }
        const {data} = await http3().post('/products', dataReq);
        result.successMsg = data.message;
        return data;
    } catch (error) {
        result.errorMsg = error.response.data.message;
        return result;
    }
});

export const getProductUser = createAsyncThunk('product/my-product', async () => {
    const result = {};
    try {
        const {data} = await http3().get('/myProducts?page=1&limit=5');
        return data;
    } catch (error) {
        result.errorMsg = error.response.data.message;
        return result;
    }
});

export const getProductDetail = createAsyncThunk('product/details', async(id) => {
    const result = {};
    try {
        const {data} = await http3().get('/products/'+id);
        return data;
    } catch (error) {
        result.errorMsg = error.response.data.message;
        return result;
    }
});

export const updateProduct = createAsyncThunk('product/update', async(request) => {
    const result = {};
    try {
        const dataReq = {product_name: request.nameProduct, price: request.price, stock: request.stock, is_archive: request.is_archive, discount: request.discount};
        const send = qs.stringify(dataReq);
        const {data} = await http3().patch('/products/'+request.idProduct, send);
        return data;
    } catch (error) {
        result.errorMsg = error.response.data.message;
        return result;
    }
});

export const deleteProduct = createAsyncThunk('product/delated', async (id) => {
    const result = {};
    try {
        const {data} = await http3().delete('/products/'+id);
        result.successMsg = data.message;
        return result;
    } catch (error) {
        result.errorMsg = error.response.data.message;
        return result;
    }
});
