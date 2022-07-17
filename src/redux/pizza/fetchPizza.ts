import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { IPizza } from "../../types/IPizza";

interface fetchPizzaParams {
    search: string;
    sortBy: string;
    category: number;
    order: string;
}

export const fetchPizza = createAsyncThunk<IPizza[], fetchPizzaParams>(
    'pizza/fetchPizzaStatus',
    async (params) => {
        const {category, order, sortBy, search} = params;
        const categoryParam = category === 0 ? '' : `&category=${category}`
        const sortParam = `sortBy=${sortBy}&order=${order}`
        const searchParam = search.length > 0 ? `&search=${search}` : ''
        const response = await axios.get<IPizza[]>(`https://626d16545267c14d5677d9c2.mockapi.io/items?${sortParam}${categoryParam}${searchParam}`);
        return response.data;
    }
)