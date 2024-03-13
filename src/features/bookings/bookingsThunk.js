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
        return await delay(bookings.map((booking) => (
            booking.id == updatedBooking.id ? updatedBooking : booking
        )))
    })
export const fetchDeleteBooking = createAsyncThunk(
    "bookings/fetchDeleteBooking",
    async (id) => {
        console.log(typeof (id), typeof (bookings[0].id))
        return await delay(bookings.filter((booking) => (
            booking.id !== id
        )))
    })