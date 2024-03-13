import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookings } from '../../features/bookings/bookingsThunk';
import { getBookingsList } from '../../features/bookings/bookingsSlice';
import BookingForm from './BookingForm';


const NewBookingPage = () => {
    const dispatch = useDispatch();
    const bookingsList = useSelector(getBookingsList);

    useEffect(
        () => {
            dispatch(fetchBookings());
        }, [
        dispatch,
        bookingsList]
    );

    const maxId = useMemo(() => {
        return bookingsList.reduce((prev, current) => (prev && prev.y > current.y) ? prev : current, 1).id
    }, [bookingsList])


    const singleBooking = {
        id: maxId + 1,
        name: "",
        order_date: "",
        check_in: "",
        hour_check_in: "",
        check_out: "",
        hour_check_out: "",
        special_request: "",
        room_id: "",
    }

    return (
        <>
            <BookingForm singleBooking={singleBooking} type={'New'} />
        </>
    )
}

export default NewBookingPage