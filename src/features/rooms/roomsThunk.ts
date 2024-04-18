import { createAsyncThunk } from '@reduxjs/toolkit';
import { RoomInterface } from '../../interfaces/room/roomInterface';
import { callApi } from '../../utils/callApi';



export const fetchRooms = createAsyncThunk(
    'rooms/fetchRooms',
    async () => {
        return await callApi('/rooms')
    })
export const fetchSingleRoom = createAsyncThunk(
    'rooms/fetchSingleRoom',
    async (id: string) => {
        return await callApi(`/rooms/${id}`)
    })
export const fetchCreateRoom = createAsyncThunk(
    'rooms/fetchCreateRoom',
    async (newRoom: RoomInterface) => {
        return await callApi(`/rooms`, 'POST', newRoom)
    })
export const fetchUpdateRoom = createAsyncThunk(
    'rooms/fetchUpdateRoom',
    async (updatedRoom: RoomInterface) => {
        return await callApi(`/bookings/${updatedRoom._id}`, 'PUT', updatedRoom)
    })
export const fetchDeleteRoom = createAsyncThunk(
    'rooms/fetchDeleteRoom',
    async (id: string) => {
        return await callApi(`/rooms/${id}`, 'DELETE')
    })