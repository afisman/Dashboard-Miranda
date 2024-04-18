import React, { useEffect, useState } from 'react';
import { fetchBookings } from '../../features/bookings/bookingsThunk.js';
import { getBookingsList } from '../../features/bookings/bookingsSlice.js';
import BookingForm from './BookingForm.js';
import { useAppDispatch, useAppSelector } from '../../hooks/useStore.js';
import { BookingInterface } from '../../interfaces/booking/bookingInterface.js';
import { RoomInterface } from '../../interfaces/room/roomInterface.js';
import { getRoomsList } from '../../features/rooms/roomsSlice.js';
import { fetchRooms } from '../../features/rooms/roomsThunk.js';
import { StyledSpinner } from '../../components/reusable/StyledSpinner.js';


const NewBookingPage = () => {
    const dispatch = useAppDispatch();
    const roomsList: RoomInterface[] = useAppSelector(getRoomsList);
    const [spinner, setSpinner] = useState<boolean>(true)




    const initialFetch = async () => {
        await dispatch(fetchRooms())
        setSpinner(false)
    }

    useEffect(() => {
        initialFetch()
    }, []);

    const currentDate = Date.now()
    const dayInMs = 86400000


    const singleBooking = {
        name: "",
        order_date: currentDate,
        check_in: currentDate,
        hour_check_in: "",
        check_out: currentDate + dayInMs,
        hour_check_out: "",
        special_request: "",
        discount: 0,
        room: roomsList[0],
        status: "Check in"
    }
    if (spinner) {
        return <StyledSpinner />
    }

    return (
        <>
            <BookingForm singleBooking={singleBooking} type={'New'} />
        </>
    )
}

export default NewBookingPage