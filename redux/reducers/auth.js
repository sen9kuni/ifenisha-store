import { createSlice } from '@reduxjs/toolkit';
import {login,register} from '../asyncAction/auth';
import Cookies from 'js-cookie';

const initialState={
    token:Cookies.get('token')||null,
    id:null,
    role:null,
    errormsg:null,
    successmsg:null
};

export const auth = createSlice({
    name:'auth',
    initialState,
    reducers:{
        logOut: (state,action)=>{
            Cookies.remove('token');
            localStorage.removeItem('persist:auth');
            state.token=null;
            state.id=null;
            state.role=null;
        },
        resetmsg:(state)=>{
            state.errormsg = null;
            state.successmsg = null;
        }
    },
    extraReducers:(build)=>{
        build.addCase(login.pending,(state)=>{
            state.errormsg=null;
            state.successmsg=null;
        });
        build.addCase(login.fulfilled,(state,action)=>{
            const token = action.payload?.token;
            const id = action.payload?.id;
            const role = action.payload?.role;
            if(token){
                state.id=id;
                state.role=role;
                state.token=token;
                Cookies.set('token',token);
            }else{
                state.errormsg = action.payload?.msg;
                state.successmsg = action.payload?.msg;
            }
        });
        build.addCase(register.pending,(state)=>{
            state.errormsg=null;
            state.successmsg=null;
        });
        build.addCase(register.fulfilled,(state,action)=>{
            state.errormsg = action.payload?.msg;
            state.successmsg = action.payload?.msg;
        });
    }
});

export const {logOut,resetmsg} = auth.actions;
export {login,register};
export default auth.reducer;