import { combineReducers } from '@reduxjs/toolkit';

import getCheckouts from './getCheckouts';
import chats from './chats';
import auth from './auth';
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';
import product from './product';
import notification from './notification';
import counter from './counter';
import cart from './cart';
import customer from './customer';


const authPersistConfig = {
    key:'auth',
    storage
};

const persistedAuthReducer = persistReducer(authPersistConfig,auth);

const reducer = combineReducers({
    auth:persistedAuthReducer,
    counter:counter,
    customer,
    chats,
    notification,
    getCheckouts,
    product,
    cart: cart
});

export default reducer;