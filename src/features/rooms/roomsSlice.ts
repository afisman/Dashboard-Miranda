import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchRooms, fetchDeleteRoom, fetchSingleRoom, fetchCreateRoom, fetchUpdateRoom } from "./roomsThunk";
import { RoomInterface } from "../../interfaces/room/RoomInterface";
import { RootState } from "../../app/store";

interface RoomInitialStateInterface {
    data: RoomInterface[]
    status: "idle" | "pending" | "fulfilled" | "rejected"
    error: string | null
    room: RoomInterface
}

export const roomsSlice = createSlice({
    name: 'rooms',
    initialState: {
        data: [],
        status: 'idle',
        error: null,
        room: {} as RoomInterface
    } as RoomInitialStateInterface,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRooms.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.data = action.payload;
            })
            .addCase(fetchSingleRoom.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.room = action.payload;
            })
            .addCase(fetchCreateRoom.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.data.push(action.payload);
            })
            .addCase(fetchUpdateRoom.fulfilled, (state, action) => {
                const updateRoom = action.payload;
                state.status = 'fulfilled';
                state.data.map((room) => {
                    return room.id == updateRoom.id ? updateRoom : room
                });
            })
            .addCase(fetchDeleteRoom.fulfilled, (state, action) => {
                const id = action.payload;
                state.status = 'fulfilled';
                state.data.filter((room) => (
                    room.id !== id
                ));
            })
            .addMatcher(isAnyOf(
                fetchRooms.pending,
                fetchCreateRoom.pending,
                fetchSingleRoom.pending,
                fetchDeleteRoom.pending,
                fetchUpdateRoom.pending
            ), (state) => {
                state.status = 'pending'
            })
            .addMatcher(isAnyOf(
                fetchRooms.rejected,
                fetchCreateRoom.rejected,
                fetchSingleRoom.rejected,
                fetchDeleteRoom.rejected,
                fetchUpdateRoom.rejected
            ), (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message || null;
            })
    }
})

export const getRoomsList = (state: RootState) => state.rooms.data;
export const getRoomStatus = (state: RootState) => state.rooms.status;
export const getRoomsError = (state: RootState) => state.rooms.error;
export const getSingleRoom = (state: RootState) => state.rooms.room;

export default roomsSlice.reducer;