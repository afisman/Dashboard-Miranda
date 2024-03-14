import React from 'react';
import RoomForm from './RoomForm';

const NewRoomPage = () => {

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
            <RoomForm singleRoom={singleRoom} type={"New"} />
        </>
    )
}

export default NewRoomPage