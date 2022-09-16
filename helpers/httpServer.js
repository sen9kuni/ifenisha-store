import axios from 'axios';

const axiosApiIntances = axios.create({
    baseURL: process.env.BACK_END_URL
});

export default axiosApiIntances;