import { createAsyncThunk } from "@reduxjs/toolkit";
import data from '../../data/bookings.json';


export const fetchBookings = createAsyncThunk(
    "bookings/fetchBookings",
    async () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(data)
            }, 200)
        })
    })
export const fetchSingleBooking = createAsyncThunk(
    "bookings/fetchSingleBooking",
    async (id) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const booking = data.find((el) => data[el].id === id)
                resolve(booking)
            }, 200)
        })
    })
export const fetchCreateBooking = createAsyncThunk(
    "bookings/fetchCreateBooking",
    async (newBooking) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(newBooking)
            }, 200)
        })
    })
export const fetchUpdateBooking = createAsyncThunk(
    "bookings/fetchUpdateBooking",
    async (updatedBooking) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(updatedBooking)
            }, 200)
        })
    })
export const fetchDeleteBooking = createAsyncThunk(
    "bookings/fetchDeleteBooking",
    async (id) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(id)
            }, 200)
        })
    })