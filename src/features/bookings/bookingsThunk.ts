import { createAsyncThunk } from "@reduxjs/toolkit";
import bookings from '../../data/bookings.json';
import { BookingInterface } from "../../interfaces/booking/bookingInterface";
import { callApi } from "../../utils/callApi";

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
        return await callApi('/bookings')
    })
export const fetchSingleBooking = createAsyncThunk(
    "bookings/fetchSingleBooking",
    async (id: string) => {
        return await callApi(`/bookings/${id}`)
    })
export const fetchCreateBooking = createAsyncThunk(
    "bookings/fetchCreateBooking",
    async (newBooking: BookingInterface) => {
        return await callApi(`/bookings/${newBooking._id}`, 'POST', newBooking)
    })
export const fetchUpdateBooking = createAsyncThunk(
    "bookings/fetchUpdateBooking",
    async (updatedBooking: BookingInterface) => {
        return await callApi(`/bookings/${updatedBooking._id}`, 'PUT', updatedBooking)
    })
export const fetchDeleteBooking = createAsyncThunk(
    "bookings/fetchDeleteBooking",
    async (id: string) => {
        return await callApi(`/bookings/${id}`, 'DELETE')
    })