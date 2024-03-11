import { createSlice } from "@reduxjs/toolkit";
import { fetchBookings, fetchSingleBooking } from "./bookingsThunk";


export const bookingsSlice = createSlice({
    name: 'bookings',
    initialState: {
        bookings: [],
        status: 'idle',
        error: null,
        booking: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBookings.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(fetchBookings.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.bookings = action.payload;
            })
            .addCase(fetchBookings.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message;
            })

        builder
            .addCase(fetchSingleBooking.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(fetchSingleBooking.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.booking = action.payload;
            })
            .addCase(fetchSingleBooking.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message;
            })

    }
})

export const getBookingsList = (state) => state.bookings.bookings;
export const getBookingsStatus = (state) => state.bookings.status;
export const getBookingsError = (state) => state.bookings.error;
export const getSingleBooking = (state) => state.bookings.booking;

export default bookingsSlice.reducer;