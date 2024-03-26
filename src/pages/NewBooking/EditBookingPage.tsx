import React, { useCallback, useEffect } from 'react';
import BookingForm from './BookingForm';
import { useParams } from 'react-router-dom';
import { getSingleBooking } from '../../features/bookings/bookingsSlice';
import { fetchSingleBooking } from '../../features/bookings/bookingsThunk';
import { useAppDispatch, useAppSelector } from '../../hooks/useStore';
import { BookingInterface } from '../../interfaces/booking/bookingInterface';

const EditBookingPage = () => {
    const { id } = useParams();
    const singleBooking: BookingInterface = useAppSelector(getSingleBooking);
    const dispatch = useAppDispatch()


    const initialFetch = useCallback(() => {
        dispatch(fetchSingleBooking(Number(id)));
    }, [id, dispatch])

    useEffect(() => {
        initialFetch();
    }, [initialFetch])




    return (
        <BookingForm singleBooking={singleBooking} type={'Edit'} />
    )
}

export default EditBookingPage