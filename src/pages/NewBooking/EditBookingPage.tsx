import { useEffect, useState } from 'react';
import BookingForm from './BookingForm';
import { useParams } from 'react-router-dom';
import { getSingleBooking } from '../../features/bookings/bookingsSlice';
import { fetchSingleBooking, fetchUpdateBooking } from '../../features/bookings/bookingsThunk';
import { useAppDispatch, useAppSelector } from '../../hooks/useStore';
import { BookingInterface } from '../../interfaces/booking/bookingInterface';
import { StyledSpinner } from '../../components/reusable/StyledSpinner';
import { toast } from 'react-toastify';

const EditBookingPage = () => {
    const { id } = useParams();
    const singleBooking: BookingInterface = useAppSelector(getSingleBooking);
    const dispatch = useAppDispatch();
    const [spinner, setSpinner] = useState<boolean>(true);

    const initialFetch = async () => {
        await dispatch(fetchSingleBooking(id!));
        setSpinner(false)
    };

    useEffect(() => {
        initialFetch();
    }, []);


    const submitEditForm = async (formData: BookingInterface) => {
        try {
            await dispatch(fetchUpdateBooking(formData));
            toast('Booking edited successfully!!')

        } catch (error) {
            console.log(error);
            toast(`Error while editing, please try again.`);
        }
    };

    if (spinner === true) {
        return <StyledSpinner />
    };

    return (
        <BookingForm singleBooking={singleBooking} type={'Edit'} submitBookingForm={submitEditForm} />
    )
};

export default EditBookingPage;