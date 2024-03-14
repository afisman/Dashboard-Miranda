import React, { useState } from 'react';
import { StyledFormContainer, StyledFormInput, StyledFormWrapper, StyledTextArea, StyledFormSelect } from '../../components/reusable/StyledForm';
import { StyledButton } from '../../components/reusable/StyledButton';

const UserForm = ({ singleuser, type }) => {
    const [form, setForm] = useState({});



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
                <StyledFormContainer onSubmit={(e) => handleSubmit(e)}>
                    <StyledFormInput
                        placeholder='Full name'
                        name='full_name'
                        type='string'
                        value={form.full_name || ''}
                    ></StyledFormInput>
                    <StyledFormInput
                        placeholder='Email'
                        name='email'
                        type='email'
                        value={form.email || ''}
                    ></StyledFormInput>
                    <StyledFormInput
                        placeholder='Phone number'
                        name='contact'
                        type='number'
                        value={form.contact || ''}
                    ></StyledFormInput>
                    <StyledFormInput
                        placeholder='Start Date'
                        name='start_date'
                        type='date'
                        value={form.start_date || ''}
                    ></StyledFormInput>
                    <StyledFormInput
                        placeholder='Password'
                        name='password'
                        type='password'
                        value={form.password || ''}
                    ></StyledFormInput>
                    <StyledFormSelect
                        name='position'
                        value={form.position || ''}

                    >
                        <option value="Manager">Manager</option>
                        <option value="Reception">Reception</option>
                        <option value="Room service">Room service</option>
                    </StyledFormSelect>
                    <StyledTextArea
                        placeholder='Description'
                        name='description'
                        type='string'
                        value={form.description || []}
                    ></StyledTextArea>
                    <StyledButton $name="login" type="submit">
                        Create User
                    </StyledButton>
                </StyledFormContainer>
            </StyledFormWrapper>
        </>
    )
}

export default UserForm