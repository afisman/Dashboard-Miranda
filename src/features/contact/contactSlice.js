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
            .addCase(fetchSingleContact.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.contact = action.payload;
            })
            .addCase(fetchUpdateContact.fulfilled, (state, action) => {
                const updateContact = action.payload;
                state.status = 'fulfilled';
                state.contacts.map((contact) => {
                    return contact.id == updateContact.id ? updateContact : contact
                });
            })
            .addCase(fetchDeleteContact.fulfilled, (state, action) => {
                const id = action.payload;
                state.status = 'fulfilled';
                state.contacts.filter((contact) => (
                    contact.id !== id
                ));
            })
            .addMatcher(isAnyOf(
                fetchContacts.pending,
                fetchSingleContact.pending,
                fetchDeleteContact.pending,
                fetchUpdateContact.pending
            ), (state) => {
                state.status = 'pending'
            })
            .addMatcher(isAnyOf(
                fetchContacts.rejected,
                fetchSingleContact.rejected,
                fetchDeleteContact.rejected,
                fetchUpdateContact.rejected
            ), (state, action) => {
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