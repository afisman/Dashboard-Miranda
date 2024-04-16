import { useCallback, useEffect, useState } from 'react';
import BookingForm from './BookingForm';
import { useParams } from 'react-router-dom';
import { getSingleBooking } from '../../features/bookings/bookingsSlice';
import { fetchSingleBooking } from '../../features/bookings/bookingsThunk';
import { useAppDispatch, useAppSelector } from '../../hooks/useStore';
import { BookingInterface } from '../../interfaces/booking/bookingInterface';
import { StyledSpinner } from '../../components/reusable/StyledSpinner';

const EditBookingPage = () => {
    const { id } = useParams();
    const singleBooking: BookingInterface = useAppSelector(getSingleBooking);
    const dispatch = useAppDispatch()
    const [spinner, setSpinner] = useState<boolean>(true);

    const initialFetch = useCallback(async () => {
        await dispatch(fetchSingleBooking(id!));
        setSpinner(false)
    }, [id, dispatch])

    useEffect(() => {
        initialFetch();
    }, [])

    if (spinner === true) {
        return <StyledSpinner />
    }

    return (
        <BookingForm singleBooking={singleBooking} type={'Edit'} />
    )
}

export default EditBookingPage