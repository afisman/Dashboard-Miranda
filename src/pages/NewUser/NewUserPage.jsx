import React, { useState } from 'react';
import { StyledFormContainer, StyledFormInput, StyledFormWrapper, StyledTextArea, StyledFormSelect } from '../../components/reusable/StyledForm';
import { StyledButton } from '../../components/reusable/StyledButton';


const NewUserPage = () => {
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
                        placeholder='Full name'
                        name='full_name'
                        type='string'
                        value={form.full_name || ''}
                        onChange={handleFormChange}
                    ></StyledFormInput>
                    <StyledFormInput
                        placeholder='Email'
                        name='email'
                        type='email'
                        value={form.email || ''}
                        onChange={handleFormChange}
                    ></StyledFormInput>
                    <StyledFormInput
                        placeholder='Phone number'
                        name='contact'
                        type='number'
                        value={form.contact || ''}
                        onChange={handleFormChange}
                    ></StyledFormInput>
                    <StyledFormInput
                        placeholder='Start Date'
                        name='start_date'
                        type='date'
                        value={form.start_date || ''}
                        onChange={handleFormChange}
                    ></StyledFormInput>
                    <StyledFormInput
                        placeholder='Password'
                        name='password'
                        type='password'
                        value={form.password || ''}
                        onChange={handleFormChange}
                    ></StyledFormInput>
                    <StyledFormSelect
                        name='position'
                        value={form.position || ''}
                        onChange={handleFormChange}

                    >
                        <option value="Manager">Manager</option>
                        <option value="Reception">Reception</option>
                        <option value="Room service">Room service</option>
                    </StyledFormSelect>
                    <StyledTextArea
                        placeholder='Description'
                        name='description'
                        type='string'
                        value={form.amenities || []}
                        onChange={handleFormChange}
                    ></StyledTextArea>
                    <StyledButton $name="login" type="submit">
                        Create User
                    </StyledButton>
                </StyledFormContainer>
            </StyledFormWrapper>
        </>
    )
}

export default NewUserPage