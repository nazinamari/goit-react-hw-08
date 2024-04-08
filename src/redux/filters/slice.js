import { createSlice } from '@reduxjs/toolkit';

const initialState = { name: '' };

export const filtersSlice = createSlice({
    name: 'filters',
    initialState: initialState,
    reducers: {
        setFilterName: (state, action) => {
            state.name = action.payload;
        },
    },
});

export const { setFilterName } = filtersSlice.actions;

export const filterReducer = filtersSlice.reducer;
