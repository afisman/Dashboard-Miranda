import { createAsyncThunk } from "@reduxjs/toolkit";
import users from '../../data/users.json';

function delay(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data)
        }, 200)
    })
}

export const fetchUsers = createAsyncThunk(
    "users/fetchUsers",
    async () => {
        return await delay(users)
    })
export const fetchSingleUser = createAsyncThunk(
    "users/fetchSingleUser",
    async (id) => {
        return await delay(users.find((el) => el.id == id))

    })
export const fetchCreateUser = createAsyncThunk(
    "users/fetchCreateUser",
    async (newUser) => {
        return await delay(newUser)

    })
export const fetchUpdateUser = createAsyncThunk(
    "users/fetchUpdateUser",
    async (updatedUser) => {
        return await delay(updatedUser)

    })
export const fetchDeleteUser = createAsyncThunk(
    "users/fetchDeleteUser",
    async (id) => {
        return await delay(id)
    })