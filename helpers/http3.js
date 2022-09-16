import axios from 'axios';
import Cookies from 'js-cookie';

export const http3 = () => {
    const headers = {};
    const token = Cookies.get('token');
    if(token) {
        headers.authorization = `Bearer ${token}`;
    }
    return axios.create({
        headers,
        baseURL: process.env.BACK_END_URL
    });
};