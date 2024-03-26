import React, { useEffect, useMemo } from 'react';
import { fetchBookings } from '../../features/bookings/bookingsThunk.js';
import { getBookingsList } from '../../features/bookings/bookingsSlice.js';
import BookingForm from './BookingForm.js';
import { useAppDispatch, useAppSelector } from '../../hooks/useStore.js';
import { BookingInterface } from '../../interfaces/booking/bookingInterface.js';


const NewBookingPage = () => {
    const dispatch = useAppDispatch();
    const bookingsList = useAppSelector(getBookingsList);

    useEffect(
        () => {
            dispatch(fetchBookings());
        }, [
        dispatch,
        bookingsList]
    );
    // return roomsList.reduce((prev: RoomInterface, current: RoomInterface) => (prev && prev.id > current.id) ? prev : current).id + 1
    const maxId: number = useMemo(() => {
        return bookingsList.reduce((prev: BookingInterface, current: BookingInterface) => (prev && prev.id > current.id) ? prev : current).id + 1
    }, [bookingsList])

    console.log(maxId)


    const singleBooking = {
        id: maxId,
        name: "",
        order_date: "",
        check_in: "",
        hour_check_in: "",
        check_out: "",
        hour_check_out: "",
        special_request: "",
        rate: '',
        room: { id: 1 },
        room_type: "",
        status: ""
    }

    return (
        <>
            <BookingForm singleBooking={singleBooking} type={'New'} />
        </>
    )
}

export default NewBookingPage