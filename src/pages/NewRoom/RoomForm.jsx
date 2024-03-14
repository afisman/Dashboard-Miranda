import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { StyledFormContainer, StyledFormInput, StyledFormWrapper, StyledTextArea } from '../../components/reusable/StyledForm';
import { StyledButton } from '../../components/reusable/StyledButton';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { StyledSpinner } from '../../components/reusable/StyledSpinner';
import { fetchCreateRoom, fetchRooms, fetchUpdateRoom } from '../../features/rooms/roomsThunk';
import { getRoomsList } from '../../features/rooms/roomsSlice';



const RoomForm = ({ singleRoom, type }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const roomsList = useSelector(getRoomsList)

    const [spinner, setSpinner] = useState(true);
    const [formData, setFormData] = useState({ ...singleRoom });

    const initialFetch = useCallback(async () => {
        await dispatch(fetchRooms()).unwrap();
        setSpinner(false);
    }, [dispatch])

    useEffect(() => {
        initialFetch();
    }, [initialFetch]);

    const maxId = useMemo(() => {
        return roomsList.reduce((prev, current) => (prev && prev.y > current.y) ? prev : current, 1).id + 1
    }, [roomsList])

    const handleUpdateId = () => {
        if (type === 'New') {
            setFormData(prevData => ({ ...prevData, id: maxId }))
        }
    }

    useEffect(() => {
        handleUpdateId()
    }, [maxId])



    const handleFormChange = (e) => {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        if (type === 'Edit') {
            dispatch(fetchUpdateRoom(formData));
        }

        if (type === 'New') {
            console.log(formData)
            dispatch(fetchCreateRoom(formData))
        }
    }

    return (
        <>
            {spinner ?


                <StyledSpinner />
                : <>
                    <StyledButton $name='goBack' onClick={() => { navigate('/rooms') }}>
                        Go back
                    </StyledButton>
                    <StyledFormWrapper>
                        <StyledFormContainer onSubmit={(e) => handleSubmit(e)}>
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
                                type='string'
                                value={formData.photos.join("\n")}
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
                            <StyledFormInput
                                placeholder='Cancelation'
                                name='cancelation'
                                type='string'
                                value={formData.cancelation}
                                onChange={(e) => handleFormChange(e)}
                            ></StyledFormInput>
                            <StyledTextArea
                                placeholder='Amenities, enter each in a different line'
                                name='amenities'
                                type='string'
                                value={formData.amenities.join("\n")}
                                onChange={(e) => handleFormChange(e)}
                                rows={6}
                            ></StyledTextArea>
                            <StyledButton $name="login" type="submit">
                                {type} Room
                            </StyledButton>
                        </StyledFormContainer>
                    </StyledFormWrapper>
                </>
            }
        </>
    )
}

export default RoomForm