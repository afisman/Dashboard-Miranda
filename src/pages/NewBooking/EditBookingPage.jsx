import React, { useCallback, useEffect } from 'react'
import BookingForm from './BookingForm'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getSingleBooking } from '../../features/bookings/bookingsSlice';
import { fetchSingleBooking } from '../../features/bookings/bookingsThunk';

const EditBookingPage = () => {
    const { id } = useParams();
    const singleBooking = useSelector(getSingleBooking);
    const dispatch = useDispatch()


    const initialFetch = useCallback(async () => {
        await dispatch(fetchSingleBooking(id));
    }, [id, dispatch])

    useEffect(() => {
        initialFetch();
    }, [initialFetch])




    return (
        <BookingForm singleBooking={singleBooking} type={'Edit'} />
    )
}

export default EditBookingPage