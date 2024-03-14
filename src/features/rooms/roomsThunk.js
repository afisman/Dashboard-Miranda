import { createAsyncThunk } from "@reduxjs/toolkit";
import rooms from '../../data/rooms.json';

function delay(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data)
        }, 200)
    })
}

export const fetchRooms = createAsyncThunk(
    "rooms/fetchRooms",
    async () => {
        return await delay(rooms)
    })
export const fetchSingleRoom = createAsyncThunk(
    "rooms/fetchSingleRoom",
    async (id) => {
        console.log(id)
        return await delay(rooms.find((el) => el.id == id))

    })
export const fetchCreateRoom = createAsyncThunk(
    "rooms/fetchCreateRoom",
    async (newRoom) => {
        return await delay([...rooms, newRoom])

    })
export const fetchUpdateRoom = createAsyncThunk(
    "rooms/fetchUpdateRoom",
    async (updateRoom) => {
        console.log(updateRoom.id)
        return await delay(rooms.map((room) => {
            console.log(updateRoom.id == room.id)
            return room.id == updateRoom.id ? updateRoom : room
        }))

    })
export const fetchDeleteRoom = createAsyncThunk(
    "rooms/fetchDeleteRoom",
    async (id) => {
        return await delay(rooms.filter((room) => (
            room.id !== id
        )))
    })