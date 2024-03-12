import { createAsyncThunk } from "@reduxjs/toolkit";
import bookings from '../../data/bookings.json';

function delay(path, id = 0, data = null) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (path === "bookings/fetchBookings") {
                resolve(bookings)
            } else if (path === "bookings/fetchSingleBooking") {
                resolve(bookings.find((el) => data[el].id === id))
            } else if (path === "bookings/fetchCreateBooking") {
                resolve(data)
            } else if (path === "bookings/fetchUpdateBooking") {
                resolve(data)
            } else if ("bookings/fetchDeleteBooking") {
                resolve(id)
            } else {
                rejects("Error")
            }
        }, 200)
    })
}

export const fetchBookings = createAsyncThunk(
    "bookings/fetchBookings",
    async () => {
        return await delay("bookings/fetchBookings")
    })
export const fetchSingleBooking = createAsyncThunk(
    "bookings/fetchSingleBooking",
    async (id) => {
        return await delay("bookings/fetchSingleBooking", id)

    })
export const fetchCreateBooking = createAsyncThunk(
    "bookings/fetchCreateBooking",
    async (newBooking) => {
        return await delay("bookings/fetchCreateBooking", newBooking)

    })
export const fetchUpdateBooking = createAsyncThunk(
    "bookings/fetchUpdateBooking",
    async (updatedBooking) => {
        return await delay("bookings/fetchUpdateBooking", updatedBooking)

    })
export const fetchDeleteBooking = createAsyncThunk(
    "bookings/fetchDeleteBooking",
    async (id) => {
        return await delay("bookings/fetchDeleteBooking", id)
    })