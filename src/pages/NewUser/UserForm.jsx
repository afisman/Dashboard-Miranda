import React, { useState } from 'react';
import { StyledFormContainer, StyledFormInput, StyledFormWrapper, StyledTextArea, StyledFormSelect } from '../../components/reusable/StyledForm';
import { StyledButton } from '../../components/reusable/StyledButton';
import { useNavigate } from 'react-router';
import { fetchCreateUser, fetchUpdateUser } from '../../features/users/usersThunk.ts';
import { useDispatch } from 'react-redux';

const UserForm = ({ singleUser, type }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ ...singleUser });
    const [spinner, setSpinner] = useState(true);
    const dispatch = useDispatch();


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

        if (type === 'Edit') {
            dispatch(fetchUpdateUser(formData));
        }

        if (type === 'New') {
            dispatch(fetchCreateUser(formData))
        }
    }

    return (
        <>
            <StyledButton $name='goBack' onClick={() => { navigate('/users') }}>
                Go back
            </StyledButton>
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
                        value={Number(formData.contact)}
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