import React, { useState } from 'react';
import { StyledFormContainer, StyledFormInput, StyledFormWrapper, StyledTextArea } from '../../components/reusable/StyledForm';
import { StyledButton } from '../../components/reusable/StyledButton';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';



const RoomForm = ({ singleRoom, type }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [formData, setFormData] = useState(singleBooking);

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

        const { name, value } = e.target;
    }

    return (
        <>
            <StyledFormWrapper>
                <StyledFormContainer onSubmit={handleSubmit}>
                    <StyledFormInput
                        placeholder='Room Number'
                        name='room_number'
                        type='string'
                        value={formData.room_number || ''}
                        onChange={handleFormChange}
                    ></StyledFormInput>
                    <StyledTextArea
                        placeholder='Photos'
                        name='photos'
                        type='string'
                        value={formData.photos || []}
                        onChange={handleFormChange}
                        rows={6}
                    ></StyledTextArea>
                    <StyledFormInput
                        placeholder='Description'
                        name='description'
                        type='string'
                        value={formData.description || ''}
                        onChange={handleFormChange}
                    ></StyledFormInput>
                    <StyledFormInput
                        placeholder='Price per night'
                        name='price'
                        type='number'
                        value={formData.price || ''}
                        onChange={handleFormChange}
                    ></StyledFormInput>
                    <StyledFormInput
                        placeholder='discount'
                        name='discount'
                        type='number'
                        value={formData.discount || ''}
                        onChange={handleFormChange}
                    ></StyledFormInput>
                    <StyledFormInput
                        placeholder='Cancelation'
                        name='cancelation'
                        type='string'
                        value={formData.cancelation || ''}
                        onChange={handleFormChange}
                    ></StyledFormInput>
                    <StyledTextArea
                        placeholder='Amenities'
                        name='amenities'
                        type='string'
                        value={formData.amenities || []}
                        onChange={handleFormChange}
                        rows={6}
                    ></StyledTextArea>
                    <StyledButton $name="login" type="submit">
                        Create Room
                    </StyledButton>
                </StyledFormContainer>
            </StyledFormWrapper>
        </>
    )
}

export default RoomForm