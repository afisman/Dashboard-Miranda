import { useEffect, useState } from 'react';
import { StyledCardWrapper } from '../../components/reusable/StyledDataCard';
import BookingPageCard from './BookingPageCard';
import BookingPageSwiper from './BookingPageSwiper';
import { useParams } from 'react-router';
import { BookingInterface } from '../../interfaces/booking/bookingInterface';
import { RoomInterface } from '../../interfaces/room/roomInterface';
import { useAppDispatch, useAppSelector } from '../../hooks/useStore';
import { fetchSingleBooking } from '../../features/bookings/bookingsThunk';
import { getSingleRoom } from '../../features/rooms/roomsSlice';
import { getSingleBooking } from '../../features/bookings/bookingsSlice';
import { fetchSingleRoom } from '../../features/rooms/roomsThunk';
import { StyledSpinner } from '../../components/reusable/StyledSpinner';



const BookingPage = () => {
    const { id } = useParams();

    const [spinner, setSpinner] = useState<boolean>(true)

    const singleBooking: BookingInterface = useAppSelector(getSingleBooking);
    const dispatch = useAppDispatch();
    const singleRoom: RoomInterface = useAppSelector(getSingleRoom);

    const initialFetch = async () => {
        await dispatch(fetchSingleBooking(id!)).unwrap();
    };

    const secondFetch = async () => {
        await dispatch(fetchSingleRoom(singleBooking.room._id!));
        setSpinner(false);
    };
    useEffect(() => {
        initialFetch();
    }, []);

    useEffect(() => {
        secondFetch();
    }, [singleBooking]);

    if (spinner) {
        return <StyledSpinner />
    };

    return (
        <StyledCardWrapper>
            <BookingPageCard booking={singleBooking as BookingInterface} room={singleRoom as RoomInterface} />
            <BookingPageSwiper images={singleRoom?.photos as string[]} />
        </StyledCardWrapper>
    )
};

export default BookingPage;