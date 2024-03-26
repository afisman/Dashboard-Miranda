import { createAsyncThunk } from "@reduxjs/toolkit";
import bookings from '../../data/bookings.json';
import { BookingInterface } from "../../interfaces/booking/bookingInterface";

function delay(data: any) {
    return new Promise<any>((resolve) => {
        setTimeout(() => {
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
    async (id: number) => {
        return await delay(bookings.find((el) => el.id == id))
    })
export const fetchCreateBooking = createAsyncThunk(
    "bookings/fetchCreateBooking",
    async (newBooking: BookingInterface) => {
        return await delay(newBooking)

    })
export const fetchUpdateBooking = createAsyncThunk(
    "bookings/fetchUpdateBooking",
    async (updatedBooking: BookingInterface) => {
        return await delay(updatedBooking)
    })
export const fetchDeleteBooking = createAsyncThunk(
    "bookings/fetchDeleteBooking",
    async (id: number) => {
        return await delay(bookings.find((el) => el.id == id))
    })