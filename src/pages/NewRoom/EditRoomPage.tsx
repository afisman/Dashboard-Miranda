import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RoomForm from './RoomForm';
import { getSingleRoom } from '../../features/rooms/roomsSlice';
import { StyledSpinner } from '../../components/reusable/StyledSpinner';
import { fetchSingleRoom } from '../../features/rooms/roomsThunk';
import { useAppDispatch, useAppSelector } from '../../hooks/useStore';
import { RoomInterface } from '../../interfaces/room/roomInterface';


const EditRoomPage = () => {
    const { id } = useParams();
    const singleRoom: RoomInterface = useAppSelector(getSingleRoom);
    const dispatch = useAppDispatch()
    const [spinner, setSpinner] = useState<boolean>(true)

    const initialFetch = async () => {
        await dispatch(fetchSingleRoom(id!)).unwrap();
        setSpinner(false)
    }

    useEffect(() => {
        initialFetch();
    }, [])

    if (spinner === true) {
        return <StyledSpinner />

    }

    return (<>
        <RoomForm singleRoom={singleRoom} type={"Edit"} />
    </>
    )
}

export default EditRoomPage