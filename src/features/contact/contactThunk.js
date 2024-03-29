import { createAsyncThunk } from "@reduxjs/toolkit";
import contact from '../../data/contact.json';

function delay(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data)
        }, 200)
    })
}

export const fetchContacts = createAsyncThunk(
    "contacts/fetchContacts",
    async () => {
        return await delay(contact)
    })
export const fetchSingleContact = createAsyncThunk(
    "contacts/fetchSingleContact",
    async (id) => {
        return await delay(contact.find((el) => (el.id == id)))

    })
export const fetchUpdateContact = createAsyncThunk(
    "contacts/fetchUpdateContact",
    async (updateContact) => {
        return await delay(updateContact)

    })
export const fetchDeleteContact = createAsyncThunk(
    "contacts/fetchDeleteContact",
    async (id) => {
        return await delay(id)
    })