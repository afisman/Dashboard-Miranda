import React, { useState } from 'react';
import { StyledFormContainer, StyledFormInput, StyledFormWrapper, StyledTextArea } from '../../components/reusable/StyledForm';
import { StyledButton } from '../../components/reusable/StyledButton';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { StyledSpinner } from '../../components/reusable/StyledSpinner';
import { fetchUpdateRoom } from '../../features/rooms/roomsThunk';
import { fetchCreateBooking } from '../../features/bookings/bookingsThunk';



const RoomForm = ({ singleRoom, type }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [spinner, setSpinner] = useState(true);
    const [formData, setFormData] = useState(singleRoom);


    const handleFormChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => {
            if (name === 'amenities' || name === 'photos') {
                return {
                    ...prevData,
                    [name]: value.split("\n")
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
            dispatch(fetchCreateBooking(formData))
        }
    }

    return (
        <>
            {spinner ?


                <StyledSpinner />
                :
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
                            placeholder='Photos'
                            name='photos'
                            type='string'
                            value={formData.photos}
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
                            name='price'
                            type='number'
                            value={formData.price}
                            onChange={(e) => handleFormChange(e)}
                        ></StyledFormInput>
                        <StyledFormInput
                            placeholder='discount'
                            name='discount'
                            type='number'
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
                            placeholder='Amenities'
                            name='amenities'
                            type='string'
                            value={formData.amenities}
                            onChange={(e) => handleFormChange(e)}
                            rows={6}
                        ></StyledTextArea>
                        <StyledButton $name="login" type="submit">
                            {type} Room
                        </StyledButton>
                    </StyledFormContainer>
                </StyledFormWrapper>
            }
        </>
    )
}

export default RoomForm