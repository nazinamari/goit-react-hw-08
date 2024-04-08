import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './contactsOps';

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    extraReducers: builder =>
        builder
            .addCase(fetchContacts.pending, state => {
                state.error = false;
                state.isLoading = true;
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.items = action.payload;
            })
            .addCase(fetchContacts.rejected, state => {
                state.isLoading = false;
                state.error = true;
            })
            .addCase(addContact.pending, state => {
                state.error = false;
                state.isLoading = true;
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.items.push(action.payload);
            })
            .addCase(addContact.rejected, state => {
                state.isLoading = false;
                state.error = true;
            })
            .addCase(deleteContact.pending, state => {
                state.error = false;
                state.isLoading = true;
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.items = state.items.filter(
                    items => items.id !== action.payload.id,
                );
            })
            .addCase(deleteContact.rejected, state => {
                state.isLoading = false;
                state.error = true;
            }),
});

export const contactsReducer = contactsSlice.reducer;
