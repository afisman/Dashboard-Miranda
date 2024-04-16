import React, { useState, useEffect, useMemo } from 'react';
import { StyledFormContainer, StyledFormInput, StyledFormWrapper, StyledTextArea } from '../../components/reusable/StyledForm';
import { StyledButton } from '../../components/reusable/StyledButton';
import { useNavigate } from 'react-router-dom';
import { fetchCreateRoom, fetchRooms, fetchUpdateRoom } from '../../features/rooms/roomsThunk';
import { getRoomsList } from '../../features/rooms/roomsSlice';
import { RoomInterface } from '../../interfaces/room/RoomInterface';
import { useAppDispatch, useAppSelector } from '../../hooks/useStore';

interface RoomFormProps {
    singleRoom: RoomInterface
    type: string
}

const RoomForm = ({ singleRoom, type }: RoomFormProps) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const roomsList: RoomInterface[] = useAppSelector(getRoomsList)

    const [formData, setFormData] = useState({ ...singleRoom });

    const initialFetch = async () => {
        await dispatch(fetchRooms()).unwrap();
    }

    useEffect(() => {
        initialFetch();
    }, []);

    const maxId: number = useMemo(() => {
        return roomsList.reduce((prev: RoomInterface, current: RoomInterface) => (prev && prev.id > current.id) ? prev : current).id + 1
    }, [roomsList])

    const handleUpdateId = () => {
        if (type === 'New') {
            setFormData(prevData => ({ ...prevData, id: maxId }))
        }
    }

    useEffect(() => {
        handleUpdateId()
    }, [maxId])

    const handleFormChange = (e: React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormData((prevData) => {
            if (name === 'amenities' || name === 'photos') {
                return {
                    ...prevData,
                    [name]: value.split("\n")
                }
            } else if (name === 'rate') {
                return {
                    ...prevData,
                    [name]: Number(value)
                }
            } else {
                return {
                    ...prevData,
                    [name]: value
                }
            }
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (type === 'Edit') {
            dispatch(fetchUpdateRoom(formData));
        }

        if (type === 'New') {
            dispatch(fetchCreateRoom(formData))
        }
    }

    return (
        <>
            <>
                <StyledButton $name='goBack' onClick={() => { navigate('/rooms') }}>
                    Go back
                </StyledButton>
                <StyledFormWrapper>
                    <StyledFormContainer onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}>
                        <StyledFormInput
                            placeholder='Room Number'
                            name='room_number'
                            type='string'
                            value={formData.room_number}
                            onChange={(e) => handleFormChange(e)}
                        ></StyledFormInput>
                        <StyledTextArea
                            placeholder='Photos, enter each in a different line'
                            name='photos'
                            value={formData.photos?.join("\n")}
                            onChange={(e) => handleFormChange(e)}
                            rows={6}
                        ></StyledTextArea>
                        <StyledFormInput
                            placeholder='Description'
                            name='description'
                            type='string'
                            value={formData.description}
                            onChange={(e) => handleFormChange(e)}
                        ></StyledFormInput>
                        <StyledFormInput
                            placeholder='Price per night'
                            name='rate'
                            type='text'
                            value={String(formData.rate)}
                            onChange={(e) => handleFormChange(e)}
                        ></StyledFormInput>
                        <StyledFormInput
                            placeholder='discount'
                            name='discount'
                            type='text'
                            value={formData.discount}
                            onChange={(e) => handleFormChange(e)}
                        ></StyledFormInput>
                        {/* <StyledFormInput
                                placeholder='Cancelation'
                                name='cancelation'
                                type='text'
                                value={formData.cancelation}
                                onChange={(e) => handleFormChange(e)}
                            ></StyledFormInput> */}
                        <StyledTextArea
                            placeholder='Amenities, enter each in a different line'
                            name='amenities'
                            value={formData.amenities?.join("\n")}
                            onChange={(e) => handleFormChange(e)}
                            rows={6}
                        ></StyledTextArea>
                        <StyledButton $name="login" type="submit">
                            {type} Room
                        </StyledButton>
                    </StyledFormContainer>
                </StyledFormWrapper>
            </>
        </>
    )
}

export default RoomForm