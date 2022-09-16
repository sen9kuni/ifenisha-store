import { createSlice } from '@reduxjs/toolkit';
import { getNotif,createNotif } from '../asyncAction/notification';

const initialState={
    notif:'',
};

export const notif = createSlice({
    name:'notif',
    initialState,
    reducers:{},
    extraReducers:(build)=>{
        build.addCase(getNotif.pending,(state)=>{
            state.tittle=null;
            state.text=null;
        });
        build.addCase(getNotif.fulfilled,(state,action)=>{
            state.notif=action.payload?.data;
        });
    }
});

export default notif.reducer;
export {getNotif,createNotif};