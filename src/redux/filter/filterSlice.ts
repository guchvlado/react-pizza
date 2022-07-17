import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SortItem } from "../../types/SortItem";
import { SortPropertyEnum } from "../../types/SortPropertyEnum";

interface FilterSliceState {
    activeSearch: string;
    activeCategory: number;
    activeSortBy: SortItem;
}

const initialState: FilterSliceState = {
    activeSearch: '',
    activeCategory: 0,
    activeSortBy: {
        name: 'Популярности DESC',
        sortProperty: SortPropertyEnum.RATING_DESC
    }
}

export const fitlerSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setActiveSearch: (state, action: PayloadAction<string>) => {
            state.activeSearch = action.payload
        },
        setActiveCategory: (state, action: PayloadAction<number>) => {
            state.activeCategory = action.payload
        },
        setActiveSortBy: (state, action: PayloadAction<SortItem>) => {
            state.activeSortBy = action.payload
        }
    }
})

export const {
    setActiveCategory, 
    setActiveSearch, 
    setActiveSortBy} = fitlerSlice.actions