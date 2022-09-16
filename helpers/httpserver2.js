import axios from 'axios';

export const axiosApiIntances = ()=>{
    return axios.create({
        baseURL: process.env.BACK_END_URL
    });
};