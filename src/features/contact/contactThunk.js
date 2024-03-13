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
    "contact/fetchContacts",
    async () => {
        return await delay(contact)
    })
export const fetchSingleContact = createAsyncThunk(
    "contact/fetchSingleContact",
    async (id) => {
        return await delay(id)

    })
export const fetchUpdateContact = createAsyncThunk(
    "contact/fetchUpdateContact",
    async (updatedBooking) => {
        return await delay(updatedBooking)

    })
export const fetchDeleteContact = createAsyncThunk(
    "contact/fetchDeleteContact",
    async (id) => {
        return await delay(id)
    })