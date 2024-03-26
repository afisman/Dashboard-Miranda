import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchContacts, fetchDeleteContact, fetchSingleContact, fetchUpdateContact } from "./contactThunk";
import { ContactInterface } from "../../interfaces/contact/contactInterface";
import { RootState } from "../../app/store";

interface ContactInitialStateInterface {
    data: ContactInterface[]
    status: "idle" | "pending" | "fulfilled" | "rejected"
    error: string | null
    contact: ContactInterface
}

export const contactSlice = createSlice({
    name: 'contacts',
    initialState: {
        data: [],
        status: 'idle',
        error: null,
        contact: {} as ContactInterface
    } as ContactInitialStateInterface,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.data = action.payload;
            })
            .addCase(fetchSingleContact.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.contact = action.payload;
            })
            .addCase(fetchUpdateContact.fulfilled, (state, action) => {
                const updateContact = action.payload;
                state.status = 'fulfilled';
                state.data.map((contact) => {
                    return contact.id == updateContact.id ? updateContact : contact
                });
            })
            .addCase(fetchDeleteContact.fulfilled, (state, action) => {
                const id = action.payload;
                state.status = 'fulfilled';
                state.data.filter((contact) => (
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
                state.error = action.error.message || null;
            })
    }
})

export const getContactList = (state: RootState) => state.contacts.data;
export const getContactStatus = (state: RootState) => state.contacts.status;
export const getContactError = (state: RootState) => state.contacts.error;
export const getSingleContact = (state: RootState) => state.contacts.contact;

export default contactSlice.reducer;