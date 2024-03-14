import React, { useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import RoomForm from './RoomForm';
import { getSingleRoom } from '../../features/rooms/roomsSlice';
import { StyledSpinner } from '../../components/reusable/StyledSpinner';
import { fetchSingleRoom } from '../../features/rooms/roomsThunk';

const EditRoomPage = () => {
    const { id } = useParams();
    const singleRoom = useSelector(getSingleRoom);
    const dispatch = useDispatch()


    const initialFetch = useCallback(async () => {
        await dispatch(fetchSingleRoom(id)).unwrap();
    }, [id, dispatch])

    useEffect(() => {
        initialFetch();
    }, [initialFetch])
    console.log(singleRoom)

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