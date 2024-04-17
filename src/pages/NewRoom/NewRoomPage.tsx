import RoomForm from './RoomForm';
import { RoomInterface } from '../../interfaces/room/roomInterface';

const NewRoomPage = () => {

    const singleRoom: RoomInterface = {
        photos: [],
        room_type: "",
        room_number: "",
        description: "",
        offer: "No",
        room_floor: "",
        rate: 0,
        amenities: [],
        status: "Available",
        discount: 0
    }

    return (
        <>
            <RoomForm singleRoom={singleRoom} type={"New"} />
        </>
    )
}

export default NewRoomPage