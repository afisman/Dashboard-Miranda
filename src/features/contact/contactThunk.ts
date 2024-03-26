import { createAsyncThunk } from "@reduxjs/toolkit";
import contact from '../../data/contact.json';
import { ContactInterface } from "../../interfaces/user/userInterface";

function delay(data: any) {
    return new Promise<any>((resolve) => {
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
    async (id: number) => {
        return await delay(contact.find((el) => (el.id == id)))

    })
export const fetchUpdateContact = createAsyncThunk(
    "contacts/fetchUpdateContact",
    async (updateContact: ContactInterface) => {
        return await delay(updateContact)

    })
export const fetchDeleteContact = createAsyncThunk(
    "contacts/fetchDeleteContact",
    async (id: number) => {
        return await delay(id)
    })