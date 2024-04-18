import React, { useEffect, useState } from 'react';
import { StyledCardWrapper } from '../../components/reusable/StyledDataCard';
import { useParams } from 'react-router';
import { BookingInterface } from '../../interfaces/booking/bookingInterface';
import { RoomInterface } from '../../interfaces/room/roomInterface';
import { useAppDispatch, useAppSelector } from '../../hooks/useStore';
import { fetchSingleBooking } from '../../features/bookings/bookingsThunk';
import { getSingleRoom } from '../../features/rooms/roomsSlice';
import { getSingleBooking } from '../../features/bookings/bookingsSlice';
import { fetchSingleRoom } from '../../features/rooms/roomsThunk';
import { StyledSpinner } from '../../components/reusable/StyledSpinner';
import RoomPageCard from './RoomPageCard';
import RoomPageSwiper from './RoomPageSwiper';

const RoomDetailsPage = () => {
    const { id } = useParams();

    const [spinner, setSpinner] = useState<boolean>(true)

    const dispatch = useAppDispatch();
    const singleRoom: RoomInterface = useAppSelector(getSingleRoom);

    const initialFetch = async () => {
        await dispatch(fetchSingleRoom(id!)).unwrap()
        setSpinner(false)
    }
    useEffect(() => {
        initialFetch();
    }, [])

    if (spinner) {
        return <StyledSpinner />
    }

    return (
        <StyledCardWrapper>
            <RoomPageCard room={singleRoom as RoomInterface} />
            <RoomPageSwiper images={singleRoom?.photos as string[]} />
        </StyledCardWrapper>
    )
}

export default RoomDetailsPage