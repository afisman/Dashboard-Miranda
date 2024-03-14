import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, fetchDeleteContact, fetchSingleContact, fetchUpdateContact } from "./contactThunk";

export const contactSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [],
        status: 'idle',
        error: null,
        contact: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.contacts = action.payload;
            })
            .addCase(fetchContacts.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message;
            })
        builder
            .addCase(fetchSingleContact.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(fetchSingleContact.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.contact = action.payload;
            })
            .addCase(fetchSingleContact.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message;
            })
        builder
            .addCase(fetchUpdateContact.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(fetchUpdateContact.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.contacts = action.payload;
            })
            .addCase(fetchUpdateContact.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message;
            })
        builder
            .addCase(fetchDeleteContact.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(fetchDeleteContact.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.contacts = action.payload;
            })
            .addCase(fetchDeleteContact.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message;
            })
    }
})

export const getContactList = (state) => state.contacts.contacts;
export const getContactStatus = (state) => state.contacts.status;
export const getContactError = (state) => state.contacts.error;
export const getSingleContact = (state) => state.contacts.contact;

export default contactSlice.reducer;