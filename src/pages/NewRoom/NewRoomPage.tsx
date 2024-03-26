import React from 'react';
import RoomForm from './RoomForm';
import { RoomInterface } from '../../interfaces/room/RoomInterface';

const NewRoomPage = () => {

    const singleRoom: RoomInterface = {
        id: 0,
        photos: [],
        room_type: "",
        room_number: "",
        description: "",
        offer: "",
        room_floor: "",
        rate: 0,
        amenities: [],
        status: "Available",
        discount: ""
    }

    return (
        <>
            <RoomForm singleRoom={singleRoom} type={"New"} />
        </>
    )
}

export default NewRoomPage