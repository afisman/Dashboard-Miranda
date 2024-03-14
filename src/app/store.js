import bookingsReducer from "../features/bookings/bookingsSlice";
import roomsReducer from "../features/rooms/roomsSlice";
import usersReducer from "../features/users/usersSlice";
import contactReducer from "../features/contact/contactSlice";
import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
    reducer: {
        bookings: bookingsReducer,
        rooms: roomsReducer,
        users: usersReducer,
        contacts: contactReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})