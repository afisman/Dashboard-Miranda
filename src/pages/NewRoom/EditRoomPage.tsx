import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RoomForm from './RoomForm';
import { getSingleRoom } from '../../features/rooms/roomsSlice';
import { StyledSpinner } from '../../components/reusable/StyledSpinner';
import { fetchSingleRoom } from '../../features/rooms/roomsThunk';
import { useAppDispatch, useAppSelector } from '../../hooks/useStore';
import { RoomInterface } from '../../interfaces/room/RoomInterface';


const EditRoomPage = () => {
    const { id } = useParams();
    const singleRoom: RoomInterface = useAppSelector(getSingleRoom);
    const dispatch = useAppDispatch()



    const initialFetch = async () => {
        await dispatch(fetchSingleRoom(Number(id))).unwrap();
    }

    useEffect(() => {
        initialFetch();
    }, [initialFetch])

    return (<>

        {
            singleRoom ?
                <RoomForm singleRoom={singleRoom} type={"Edit"} />
                :
                <StyledSpinner />

        }
    </>
    )
}

export default EditRoomPage