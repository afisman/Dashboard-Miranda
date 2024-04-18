import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserInterface } from '../../interfaces/user/userInterface';
import { callApi } from '../../utils/callApi';

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async () => {
        return await callApi('/users')
    })
export const fetchSingleUser = createAsyncThunk(
    'users/fetchSingleUser',
    async (id: string) => {
        return await callApi(`/users/${id}`)
    })
export const fetchCreateUser = createAsyncThunk(
    'users/fetchCreateUser',
    async (newUser: UserInterface) => {
        return await callApi(`/users`, 'POST', newUser)
    })
export const fetchUpdateUser = createAsyncThunk(
    'users/fetchUpdateUser',
    async (updatedUser: UserInterface) => {
        return await callApi(`/users/${updatedUser._id}`, 'PUT', updatedUser)
    })
export const fetchDeleteUser = createAsyncThunk(
    'users/fetchDeleteUser',
    async (id: string) => {
        return await callApi(`/users/${id}`, 'DELETE')
    })

