import { createAsyncThunk } from "@reduxjs/toolkit";
import { ContactInterface } from "../../interfaces/contact/contactInterface";
import { callApi } from "../../utils/callApi";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchContacts",
    async () => {
        return await callApi('/contact')
    })
export const fetchSingleContact = createAsyncThunk(
    "contacts/fetchSingleContact",
    async (id: string) => {
        return await callApi(`/contact/${id}`)

    })
export const fetchUpdateContact = createAsyncThunk(
    "contacts/fetchUpdateContact",
    async (updateContact: ContactInterface) => {
        return await callApi(`/contact/${updateContact._id}`, 'PUT', updateContact)

    })
export const fetchDeleteContact = createAsyncThunk(
    "contacts/fetchDeleteContact",
    async (id: number) => {
        return await callApi(`/contact/${id}`, 'Delete')
    })