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
            .addCase(fetchRooms.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.rooms = action.payload;
            })
            .addCase(fetchSingleRoom.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.room = action.payload;
            })
            .addCase(fetchCreateRoom.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.rooms.push(action.payload);
            })
            .addCase(fetchUpdateRoom.fulfilled, (state, action) => {
                const updateRoom = action.payload;
                state.status = 'fulfilled';
                state.rooms.map((room) => {
                    return room.id == updateRoom.id ? updateRoom : room
                });
            })
            .addCase(fetchDeleteRoom.fulfilled, (state, action) => {
                const id = action.payload;
                state.status = 'fulfilled';
                state.rooms.filter((room) => (
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
                state.error = action.error.message;
            })
    }
})

export const getRoomsList = (state) => state.rooms.rooms;
export const getRoomStatus = (state) => state.rooms.status;
export const getRoomsError = (state) => state.rooms.error;
export const getSingleRoom = (state) => state.rooms.room;

export default roomsSlice.reducer;