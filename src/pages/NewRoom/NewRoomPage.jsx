import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import RoomForm from './RoomForm';
import { getRoomsList } from '../../features/rooms/roomsSlice';
import { fetchRooms } from '../../features/rooms/roomsThunk';



const NewRoomPage = () => {
    const dispatch = useDispatch();
    const roomsList = useSelector(getRoomsList);

    useEffect(
        () => {
            dispatch(fetchRooms());
        }, [
        dispatch,
        roomsList]
    );

    const maxId = useMemo(() => {
        return roomsList.reduce((prev, current) => (prev && prev.y > current.y) ? prev : current, 1).id
    }, [roomsList])


    const singleRoom = {
        id: maxId + 1,
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
            {/* <StyledFormWrapper>
                <StyledFormContainer onSubmit={handleSubmit}>
                    <StyledFormInput
                        placeholder='Room Number'
                        name='room_number'
                        type='string'
                        value={form.room_number || ''}
                        onChange={handleFormChange}
                    ></StyledFormInput>
                    <StyledFormInput
                        placeholder='Description'
                        name='description'
                        type='string'
                        value={form.description || ''}
                        onChange={handleFormChange}
                    ></StyledFormInput>
                    <StyledFormInput
                        placeholder='Price per night'
                        name='price'
                        type='number'
                        value={form.price || ''}
                        onChange={handleFormChange}
                    ></StyledFormInput>
                    <StyledFormInput
                        placeholder='discount'
                        name='discount'
                        type='number'
                        value={form.discount || ''}
                        onChange={handleFormChange}
                    ></StyledFormInput>
                    <StyledFormInput
                        placeholder='Cancelation'
                        name='cancelation'
                        type='string'
                        value={form.cancelation || ''}
                        onChange={handleFormChange}
                    ></StyledFormInput>
                    <StyledTextArea
                        placeholder='Amenities'
                        name='amenities'
                        type='string'
                        value={form.amenities || []}
                        onChange={handleFormChange}
                    ></StyledTextArea>
                    <StyledButton $name="login" type="submit">
                        Create Room
                    </StyledButton>
                </StyledFormContainer>
            </StyledFormWrapper> */}
        </>
    )
}

export default NewRoomPage