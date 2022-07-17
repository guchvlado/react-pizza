import {createSlice} from '@reduxjs/toolkit'
import { fetchPizza } from './fetchPizza';
import { IPizza } from '../../types/IPizza';

interface PizzaSliceState {
    items: IPizza[];
    status: 'loading' | 'success' | 'error';
}

const initialState: PizzaSliceState = {
    items: [],
    status: 'loading'
}

export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        
    },
    extraReducers: builder => {
        builder
            .addCase(fetchPizza.pending, state => {
                state.status = 'loading'
            })
            .addCase(fetchPizza.fulfilled, (state, action) => {
                state.items = action.payload
                state.status = 'success'
            })
            .addCase(fetchPizza.rejected, state => {
                state.status = 'error'
            })
    }
});
