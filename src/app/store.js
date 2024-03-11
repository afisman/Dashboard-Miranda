import bookingsReducer from "../features/bookings/bookingsSlice";
import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
    reducer: {
        bookings: bookingsReducer,
    }
})