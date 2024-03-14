import { createSlice } from "@reduxjs/toolkit";
import { fetchRooms, fetchDeleteRoom, fetchSingleRoom, fetchCreateRoom, fetchUpdateRoom } from "./roomsThunk";
export const roomsSlice = createSlice({
    name: 'rooms',
    initialState: {
        rooms: [],
        status: 'idle',
        error: null,
        room: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRooms.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(fetchRooms.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.rooms = action.payload;
            })
            .addCase(fetchRooms.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message;
            })
        builder
            .addCase(fetchSingleRoom.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(fetchSingleRoom.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.room = action.payload;
            })
            .addCase(fetchSingleRoom.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message;
            })
        builder
            .addCase(fetchCreateRoom.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(fetchCreateRoom.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.rooms = action.payload;
            })
            .addCase(fetchCreateRoom.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message;
            })
        builder
            .addCase(fetchUpdateRoom.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(fetchUpdateRoom.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.rooms = action.payload;
            })
            .addCase(fetchUpdateRoom.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message;
            })
        builder
            .addCase(fetchDeleteRoom.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(fetchDeleteRoom.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.rooms = action.payload;

            })
            .addCase(fetchDeleteRoom.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message;
            })
    }
})

export const getRoomsList = (state) => state.rooms.rooms;
export const getRoomStatus = (state) => state.rooms.status;
export const getRoomsError = (state) => state.rooms.error;
export const getSingleRoom = (state) => state.rooms.room;

export default roomsSlice.reducer;