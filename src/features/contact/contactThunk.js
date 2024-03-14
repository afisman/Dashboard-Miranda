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
        console.log(contact.find((el) => (el.id == id)))
        return await delay(contact.find((el) => (el.id == id)))

    })
export const fetchUpdateContact = createAsyncThunk(
    "contact/fetchUpdateContact",
    async (updateContact) => {
        return await delay(contact.map((el) => {
            return el.id == updateContact.id ? updateContact : el
        }))

    })
export const fetchDeleteContact = createAsyncThunk(
    "contact/fetchDeleteContact",
    async (id) => {
        return await delay(contact.filter((el) => (
            el.id !== id
        )))
    })