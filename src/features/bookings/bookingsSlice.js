import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchBookings, fetchSingleBooking, fetchCreateBooking, fetchUpdateBooking, fetchDeleteBooking } from "./bookingsThunk";


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
            .addCase(fetchBookings.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.bookings = action.payload;
            })
            .addCase(fetchSingleBooking.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.booking = action.payload;
            })
            .addCase(fetchCreateBooking.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.bookings.push(action.payload);
            })
            .addCase(fetchUpdateBooking.fulfilled, (state, action) => {
                const updatedBooking = action.payload;
                state.status = 'fulfilled';
                state.bookings.map((booking) => (
                    booking.id == updatedBooking.id ? updatedBooking : booking
                ));
            })
            .addCase(fetchDeleteBooking.fulfilled, (state, action) => {
                const id = action.payload;
                state.status = 'fulfilled';
                state.bookings.filter((booking) => (
                    booking.id !== id
                ));
            })
            .addMatcher(isAnyOf(
                fetchBookings.pending,
                fetchCreateBooking.pending,
                fetchSingleBooking.pending,
                fetchDeleteBooking.pending,
                fetchUpdateBooking.pending
            ), (state) => {
                state.status = 'pending'
            })
            .addMatcher(isAnyOf(
                fetchBookings.rejected,
                fetchCreateBooking.rejected,
                fetchSingleBooking.rejected,
                fetchDeleteBooking.rejected,
                fetchUpdateBooking.rejected
            ), (state, action) => {
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