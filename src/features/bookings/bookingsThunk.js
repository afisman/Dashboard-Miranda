import { createAsyncThunk } from "@reduxjs/toolkit";
import bookings from '../../data/bookings.json';

function delay(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data)
            // if (path === "bookings/fetchBookings") {
            //     resolve(bookings)
            // } else if (path === "bookings/fetchSingleBooking") {
            //     resolve(bookings.find((el) => data[el].id === id))
            // } else if (path === "bookings/fetchCreateBooking") {
            //     resolve(data)
            // } else if (path === "bookings/fetchUpdateBooking") {
            //     resolve(data)
            // } else if ("bookings/fetchDeleteBooking") {
            //     resolve(id)
            // } else {
            //     rejects("Error")
            // }
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
        return await delay(id)

    })
export const fetchCreateBooking = createAsyncThunk(
    "bookings/fetchCreateBooking",
    async (newBooking) => {
        return await delay(newBooking)

    })
export const fetchUpdateBooking = createAsyncThunk(
    "bookings/fetchUpdateBooking",
    async (updatedBooking) => {
        return await delay(updatedBooking)

    })
export const fetchDeleteBooking = createAsyncThunk(
    "bookings/fetchDeleteBooking",
    async (id) => {
        return await delay(id)
    })