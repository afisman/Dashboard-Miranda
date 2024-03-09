import React, { useState } from 'react';
import { StyledFormContainer, StyledFormInput, StyledFormWrapper } from '../../components/reusable/StyledForm';
import { StyledButton } from '../../components/reusable/StyledButton';


const NewRoomPage = () => {
    const [form, setForm] = useState({});

    const handleFormChange = (e) => {
        const { name, value } = e.target;

        setForm((prevData) => {
            if (name === 'amenities') {
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

        setForm((prevData) => {
            if (name === 'amenities') {
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

    return (
        <>
            <StyledFormWrapper>
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
            </StyledFormWrapper>
        </>
    )
}

export default NewRoomPage