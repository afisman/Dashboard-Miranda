import RoomForm from './RoomForm';
import { RoomInterface } from '../../interfaces/room/roomInterface';
import { useAppDispatch } from '../../hooks/useStore';
import { toast } from 'react-toastify';
import { fetchCreateRoom } from '../../features/rooms/roomsThunk';

const NewRoomPage = () => {
    const dispatch = useAppDispatch()



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

    const dispatchNewRoom = async (formData: RoomInterface, amenities: string[]) => {
        try {
            await dispatch(fetchCreateRoom({ ...formData, amenities: amenities }));
            toast('Room created successfully!!');

        } catch (error) {
            console.log(error);
            toast(`Error while creating, please try again.`);
        }
    }

    return (
        <>
            <RoomForm singleRoom={singleRoom} type={"New"} submitFormFunction={dispatchNewRoom} />
        </>
    )
}

export default NewRoomPage