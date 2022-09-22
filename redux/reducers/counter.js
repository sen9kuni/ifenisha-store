import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    num: 1
};

const counter = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.num += 1;
        },
        decrement: (state) => {
            state.num -= 1;
        },
        resetCounter: (state) => {
            state.num = 1;
        }
    }
});

export const { resetCounter,increment, decrement } = counter.actions;

export default counter.reducer;