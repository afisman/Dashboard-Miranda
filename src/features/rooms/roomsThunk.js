import { createAsyncThunk } from "@reduxjs/toolkit";
import rooms from '../../data/rooms.json';

function delay(path, id = 0, data = null) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (path === "rooms/fetchRooms") {
                resolve(rooms)
            } else if (path === "rooms/fetchSingleRoom") {
                resolve(rooms.find((el) => data[el].id === id))
            } else if (path === "rooms/fetchCreateRoom") {
                resolve(data)
            } else if (path === "rooms/fetchUpdateRoom") {
                resolve(data)
            } else if ("rooms/fetchDeleteRoom") {
                resolve(id)
            } else {
                rejects("Error")
            }
        }, 200)
    })
}

export const fetchRooms = createAsyncThunk(
    "rooms/fetchRooms",
    async () => {
        return await delay("rooms/fetchRooms")
    })
export const fetchSingleRoom = createAsyncThunk(
    "rooms/fetchSingleRoom",
    async (id) => {
        return await delay("rooms/fetchSingleRoom", id)

    })
export const fetchCreateRoom = createAsyncThunk(
    "rooms/fetchCreateRoom",
    async (newRoom) => {
        return await delay("rooms/fetchCreateRoom", newRoom)

    })
export const fetchUpdateRoom = createAsyncThunk(
    "rooms/fetchUpdateRoom",
    async (updateRoom) => {
        return await delay("rooms/fetchUpdateRoom", updateRoom)

    })
export const fetchDeleteRoom = createAsyncThunk(
    "rooms/fetchDeleteRoom",
    async (id) => {
        return await delay("rooms/fetchDeleteRoom", id)
    })