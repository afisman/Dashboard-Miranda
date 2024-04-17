import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchBookings, fetchSingleBooking, fetchCreateBooking, fetchUpdateBooking, fetchDeleteBooking } from "./bookingsThunk";
import { BookingInterface } from '../../interfaces/booking/bookingInterface';
import { RootState } from "../../app/store";


interface BookingInitialStateInterface {
    data: BookingInterface[]
    status: "idle" | "pending" | "fulfilled" | "rejected"
    error: string | null
    booking: BookingInterface
}


export const bookingsSlice = createSlice({
    name: 'bookings',
    initialState: {
        data: [],
        status: 'idle',
        error: null,
        booking: {} as BookingInterface
    } as BookingInitialStateInterface,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBookings.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.data = action.payload;
            })
            .addCase(fetchSingleBooking.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.booking = action.payload;
            })
            .addCase(fetchCreateBooking.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.data.push(action.payload);
                state.status = 'idle';
            })
            .addCase(fetchUpdateBooking.fulfilled, (state, action) => {
                const updatedBooking = action.payload;
                state.status = 'fulfilled';
                state.data.map((booking) => (
                    booking._id == updatedBooking._id ? updatedBooking : booking
                ));
                state.status = 'idle';

            })
            .addCase(fetchDeleteBooking.fulfilled, (state, action) => {
                const id = action.payload;
                state.status = 'fulfilled';
                state.data.filter((booking) => (
                    booking._id !== id
                ));
                state.status = 'idle';

            })
            .addMatcher(isAnyOf(
                fetchBookings.pending,
                fetchCreateBooking.pending,
                fetchSingleBooking.pending,
                fetchDeleteBooking.pending,
                fetchUpdateBooking.pending
            ), (state) => {
                state.status = 'pending';
            })
            .addMatcher(isAnyOf(
                fetchBookings.rejected,
                fetchCreateBooking.rejected,
                fetchSingleBooking.rejected,
                fetchDeleteBooking.rejected,
                fetchUpdateBooking.rejected
            ), (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message || null;
            })
    }
})

export const getBookingsList = (state: RootState) => state.bookings.data;
export const getBookingsStatus = (state: RootState) => state.bookings.status;
export const getBookingsError = (state: RootState) => state.bookings.error;
export const getSingleBooking = (state: RootState) => state.bookings.booking;

export default bookingsSlice.reducer;