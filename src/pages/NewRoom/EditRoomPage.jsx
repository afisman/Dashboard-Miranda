import React, { useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleBooking } from '../../features/bookings/bookingsThunk'; import RoomForm from './RoomForm';
import { getSingleRoom } from '../../features/rooms/roomsSlice';

const EditRoomPage = () => {
    const { id } = useParams();
    const singleRoom = useSelector(getSingleRoom);
    const dispatch = useDispatch()


    const initialFetch = useCallback(() => {
        dispatch(fetchSingleBooking(id));
    }, [id, dispatch])

    useEffect(() => {
        initialFetch();
    }, [initialFetch])

    return (
        <RoomForm singleRoom={singleRoom} type={"Edit"} />
    )
}

export default EditRoomPage