import { createAsyncThunk } from "@reduxjs/toolkit";
import bookings from '../../data/bookings.json';

function delay(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(data)
            resolve(data)
        }, 200)
    })
}

export const fetchBookings = createAsyncThunk(
    "bookings/fetchBookings",
    async () => {
        return await delay(bookings)
    })
export const fetchSingleBooking = createAsyncThunk(
    "bookings/fetchSingleBooking",
    async (id) => {
        return await delay(bookings.find((el) => el.id == id))

    })
export const fetchCreateBooking = createAsyncThunk(
    "bookings/fetchCreateBooking",
    async (newBooking) => {
        return await delay(newBooking)

    })
export const fetchUpdateBooking = createAsyncThunk(
    "bookings/fetchUpdateBooking",
    async (updatedBooking) => {
        console.log(bookings.map((booking) => (
            booking.id == updatedBooking.id ? updatedBooking : booking
        )))
        return await delay(bookings.map((booking) => (
            booking.id == updatedBooking.id ? updatedBooking : booking
        )))

    })
export const fetchDeleteBooking = createAsyncThunk(
    "bookings/fetchDeleteBooking",
    async (id) => {
        return await delay(id)
    })