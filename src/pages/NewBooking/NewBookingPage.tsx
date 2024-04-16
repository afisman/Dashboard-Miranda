import React, { useEffect, useMemo } from 'react';
import { fetchBookings } from '../../features/bookings/bookingsThunk.js';
import { getBookingsList } from '../../features/bookings/bookingsSlice.js';
import BookingForm from './BookingForm.js';
import { useAppDispatch, useAppSelector } from '../../hooks/useStore.js';
import { BookingInterface } from '../../interfaces/booking/bookingInterface.js';
import { RoomInterface } from '../../interfaces/room/roomInterface.js';


const NewBookingPage = () => {
    const dispatch = useAppDispatch();
    const bookingsList = useAppSelector(getBookingsList);

    useEffect(
        () => {
            dispatch(fetchBookings());
        }, []
    );

    const currentDate = Date.now()
    const dayInMs = 86400000


    const singleBooking = {
        name: "",
        order_date: currentDate,
        check_in: currentDate,
        hour_check_in: "",
        check_out: currentDate + dayInMs,
        hour_check_out: "",
        special_request: "",
        rate: 0,
        room: {} as RoomInterface,
        status: "Check in"
    }

    return (
        <>
            <BookingForm singleBooking={singleBooking} type={'New'} />
        </>
    )
}

export default NewBookingPage