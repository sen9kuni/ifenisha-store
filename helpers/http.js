import axios from 'axios';
import Cookies from 'js-cookie';

const axiosApiIntances = axios.create({
    baseURL: process.env.BACK_END_URL
});
// Add a request interceptor
axiosApiIntances.interceptors.request.use(function (config) {
    config.headers = {
        Authorization: `Bearer ${Cookies.get('token')}`
    };
    return config;
}, function (error) {

    return Promise.reject(error);
});

// Add a response interceptor
axiosApiIntances.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    console.log(error.response);
    if (error.response.status === 403) {
        Cookies.remove('token');
        window.location.href = '/auth/login'; // sesuaikan path login
    }
    return Promise.reject(error);
});

export default axiosApiIntances;