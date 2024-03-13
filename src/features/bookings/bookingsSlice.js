import { createSlice } from "@reduxjs/toolkit";
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
                console.log(action.payload)
                state.booking = action.payload;
            })
            .addCase(fetchSingleBooking.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message;
            })

        builder
            .addCase(fetchCreateBooking.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(fetchCreateBooking.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.bookings.push(action.payload);
                console.log(state)
            })
            .addCase(fetchCreateBooking.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message;
            })

        builder
            .addCase(fetchUpdateBooking.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(fetchUpdateBooking.fulfilled, (state, action) => {
                const updatedBooking = action.payload;
                state.status = 'fulfilled';
                state.bookings.map((booking) => (
                    booking.id === updatedBooking.id ? updatedBooking : booking
                ));
            })
            .addCase(fetchUpdateBooking.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message;
            })
        builder
            .addCase(fetchDeleteBooking.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(fetchDeleteBooking.fulfilled, (state, action) => {
                const id = action.payload;
                state.status = 'fulfilled';
                state.bookings.filter((booking) => (
                    booking.id !== id
                ))
            })
            .addCase(fetchDeleteBooking.rejected, (state, action) => {
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