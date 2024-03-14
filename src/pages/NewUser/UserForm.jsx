import React, { useState } from 'react';
import { StyledFormContainer, StyledFormInput, StyledFormWrapper, StyledTextArea, StyledFormSelect } from '../../components/reusable/StyledForm';
import { StyledButton } from '../../components/reusable/StyledButton';

const UserForm = ({ singleUser, type }) => {
    const [formData, setFormData] = useState({ ...singleUser });

    const handleFormChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => {
            {
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
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    return (
        <>
            <StyledFormWrapper>
                <StyledFormContainer onSubmit={(e) => handleSubmit(e)}>
                    <StyledFormInput
                        placeholder='Full name'
                        name='full_name'
                        type='string'
                        value={formData.full_name}
                        onChange={(e) => handleFormChange(e)}
                    ></StyledFormInput>
                    <StyledFormInput
                        placeholder='Email'
                        name='email'
                        type='email'
                        value={formData.email}
                        onChange={(e) => handleFormChange(e)}
                    ></StyledFormInput>
                    <StyledFormInput
                        placeholder='Phone number'
                        name='contact'
                        type='number'
                        value={formData.contact}
                        onChange={(e) => handleFormChange(e)}
                    ></StyledFormInput>
                    <StyledFormInput
                        placeholder='Start Date'
                        name='start_date'
                        type='date'
                        value={formData.start_date}
                        onChange={(e) => handleFormChange(e)}
                    ></StyledFormInput>
                    <StyledFormSelect
                        name='position'
                        value={formData.position}
                        onChange={(e) => handleFormChange(e)}
                    >
                        <option value="Manager">Manager</option>
                        <option value="Reception">Reception</option>
                        <option value="Room service">Room service</option>
                    </StyledFormSelect>
                    <StyledTextArea
                        placeholder='Description'
                        name='description'
                        type='string'
                        value={formData.description}
                        onChange={(e) => handleFormChange(e)}
                        rows={6}
                    ></StyledTextArea>
                    <StyledButton $name="login" type="submit">
                        {type} User
                    </StyledButton>
                </StyledFormContainer>
            </StyledFormWrapper>
        </>
    )
}

export default UserForm