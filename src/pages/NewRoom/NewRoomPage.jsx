import React, { useMemo, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import RoomForm from './RoomForm';
import { getRoomsList } from '../../features/rooms/roomsSlice';
import { fetchRooms } from '../../features/rooms/roomsThunk';
import { StyledSpinner } from '../../components/reusable/StyledSpinner';



const NewRoomPage = () => {
    // const dispatch = useDispatch();
    // const roomsList = useSelector(getRoomsList);

    // useEffect(
    //     () => {
    //         dispatch(fetchRooms());
    //     }, [
    //     dispatch,
    //     roomsList]
    // );

    // const maxId = useMemo(() => {
    //     return roomsList.reduce((prev, current) => (prev && prev.y > current.y) ? prev : current, 1).id
    // }, [roomsList])

    const singleRoom = {
        id: 0,
        photos: [],
        room_type: "",
        room_number: "",
        description: "",
        offer: "",
        rate: "",
        amenities: [],
        status: "Available",
        discount: ""
    }

    return (
        <>
            {/* {maxId ? */}
            <RoomForm singleRoom={singleRoom} type={"New"} />
            {/* :
                <StyledSpinner />} */}
        </>
    )
}

export default NewRoomPage