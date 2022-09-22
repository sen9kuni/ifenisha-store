import {createSlice} from '@reduxjs/toolkit';
import { getAllChat,sending,createChat,getChatting } from '../asyncAction/chats';

const initialState = {
    wrapper:'',
    conversation:'',
    selected:'',
    recepient:'',
    errormsg:'',
    succesmsg:''
};

export const chats = createSlice({
    name:'chats',
    initialState,
    reducers:{
        resetChatmsg:(state)=>{
            state.errormsg='';
            state.succesmsg='';
        },
        costumeSelected:(state,action)=>{
            state.selected=action.payload;
        },
        costumeRecepient:(state,action)=>{
            state.recepient=action.payload;
        }
    },
    extraReducers:(build)=>{
        build.addCase(getAllChat.pending,(state)=>{
            state.succesmsg=null;
            state.errormsg=null;
        });
        build.addCase(getAllChat.fulfilled,(state,action)=>{
            state.wrapper=action.payload?.allchat;
        });
        build.addCase(getChatting.pending,(state)=>{
            state.succesmsg=null;
            state.errormsg=null;
        });
        build.addCase(getChatting.fulfilled,(state,action)=>{
            state.conversation=action.payload?.chat;
        });
        build.addCase(createChat.pending,(state)=>{
            state.succesmsg=null;
            state.errormsg=null;
        });
        build.addCase(createChat.fulfilled,(state,action)=>{
            state.succesmsg=action.payload?.msg;
        });
        build.addCase(sending.pending,(state)=>{
            state.succesmsg=null;
            state.errormsg=null;
        });
        build.addCase(sending.fulfilled,(state,action)=>{
            state.succesmsg=action.payload?.success;
            state.errormsg=action.payload?.error;
        });
    }
});

export {getAllChat,getChatting,sending,createChat};
export const {resetChatmsg,costumeSelected,costumeRecepient} = chats.actions;
export default chats.reducer;