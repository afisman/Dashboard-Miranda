import React, { useState } from 'react';
import { StyledCardWrapper } from '../../components/reusable/StyledDataCard';
import BookingPageCard from './BookingPageCard';
import BookingPageSwiper from './BookingPageSwiper';
import { useParams } from 'react-router';
import data from '../../data/bookings.json';
import rooms from '../../data/rooms.json';



const BookingPage = () => {
    const { id } = useParams();

    const [booking, setBooking] = useState(data.find((el) => el.id === Number(id)))
    const room = rooms.find((el) => el.id == booking.room.id)

    return (
        <StyledCardWrapper>
            <BookingPageCard booking={booking} room={room} />
            <BookingPageSwiper images={room.photos} />
        </StyledCardWrapper>
    )
}

export default BookingPage