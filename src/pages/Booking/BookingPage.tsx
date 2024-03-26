import React, { useState } from 'react';
import { StyledCardWrapper } from '../../components/reusable/StyledDataCard';
import BookingPageCard from './BookingPageCard';
import BookingPageSwiper from './BookingPageSwiper';
import { useParams } from 'react-router';
import data from '../../data/bookings.json';
import rooms from '../../data/rooms.json';
import { BookingInterface } from '../../interfaces/booking/bookingInterface';
import { RoomInterface } from '../../interfaces/room/RoomInterface';



const BookingPage = () => {
    const { id } = useParams();

    const [booking, setBooking] = useState<BookingInterface | undefined>(data.find((el) => el.id === Number(id)))
    const room: RoomInterface | undefined = rooms.find((el) => el.id == booking?.room.id)

    return (
        <StyledCardWrapper>
            <BookingPageCard booking={booking as BookingInterface} room={room as RoomInterface} />
            <BookingPageSwiper images={room?.photos as string[]} />
        </StyledCardWrapper>
    )
}

export default BookingPage