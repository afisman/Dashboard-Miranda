import { createAsyncThunk } from "@reduxjs/toolkit";
import rooms from '../../data/rooms.json';
import { RoomInterface } from "../../interfaces/room/RoomInterface";

function delay(data: any) {
    return new Promise<any>((resolve) => {
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
    async (id: number) => {
        return await delay(rooms.find((el) => el.id == id))

    })
export const fetchCreateRoom = createAsyncThunk(
    "rooms/fetchCreateRoom",
    async (newRoom: RoomInterface) => {
        return await delay(newRoom)

    })
export const fetchUpdateRoom = createAsyncThunk(
    "rooms/fetchUpdateRoom",
    async (updateRoom: RoomInterface) => {
        return await delay(rooms.map((room) => {
            return room.id == updateRoom.id ? updateRoom : room
        }))

    })
export const fetchDeleteRoom = createAsyncThunk(
    "rooms/fetchDeleteRoom",
    async (id: number) => {
        return await delay(id)
    })