import React, { useEffect, useState } from 'react';
import { StyledFormContainer, StyledFormInput, StyledFormWrapper, StyledTextArea, StyledFormSelect, StyledRadio } from '../../components/reusable/StyledForm';
import { StyledButton } from '../../components/reusable/StyledButton';
import { useNavigate } from 'react-router';
import { fetchCreateUser, fetchUpdateUser } from '../../features/users/usersThunk';
import { useAppDispatch } from '../../hooks/useStore';
import { UserInterface } from '../../interfaces/user/userInterface';

interface UserFormProps {
    singleUser: UserInterface
    type: string
}

const UserForm = ({ singleUser, type }: UserFormProps) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<UserInterface>({ ...singleUser, password: '' });
    const dispatch = useAppDispatch();



    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
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

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (type === 'Edit') {
            dispatch(fetchUpdateUser(formData));
        }

        if (type === 'New') {
            dispatch(fetchCreateUser(formData))
        }

        navigate('/users')
    }

    return (
        <>
            <StyledButton $name='goBack' onClick={() => { navigate('/users') }}>
                Go back
            </StyledButton>
            <StyledFormWrapper>
                <StyledFormContainer onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}>
                    <label htmlFor="full_name">Employee name</label>
                    <StyledFormInput
                        placeholder='Full name'
                        name='full_name'
                        id='full_name'
                        type='string'
                        value={formData.full_name}
                        onChange={(e) => handleFormChange(e)}
                        required
                    ></StyledFormInput>
                    <label htmlFor="email">Email</label>
                    <StyledFormInput
                        placeholder='Email'
                        name='email'
                        id='email'
                        type='email'
                        value={formData.email}
                        onChange={(e) => handleFormChange(e)}
                        required
                    ></StyledFormInput>
                    <label htmlFor="contact">Phone number</label>
                    <StyledFormInput
                        placeholder='Phone number'
                        name='contact'
                        id='contact'
                        type='number'
                        value={type === 'Edit' ? Number(formData.contact.split('-').join('')) : undefined}
                        onChange={(e) => handleFormChange(e)}
                        required
                    ></StyledFormInput>
                    <label htmlFor="photo">Image</label>
                    <StyledFormInput
                        placeholder='Enter photo link'
                        name='photo'
                        id='photo'
                        type='photo'
                        value={formData.photo}
                        onChange={(e) => handleFormChange(e)}
                        required
                    ></StyledFormInput>
                    <label htmlFor="start_date">Starting date</label>
                    <StyledFormInput
                        placeholder='Start Date'
                        name='start_date'
                        type='date'
                        value={new Date(formData.start_date).toISOString().slice(0, 10)}
                        onChange={(e) => handleFormChange(e)}
                        required
                    ></StyledFormInput>
                    <label htmlFor="position">Position</label>
                    <StyledFormSelect
                        name='position'
                        id='position'
                        value={formData.position}
                        onChange={(e) => handleFormChange(e)}
                    >
                        <option value="Manager">Manager</option>
                        <option value="Reception">Reception</option>
                        <option value="Room service">Room service</option>
                    </StyledFormSelect>
                    <label htmlFor="description">Description</label>
                    <StyledTextArea
                        placeholder='Description'
                        name='description'
                        id='description'
                        value={formData.description}
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleFormChange(e)}
                        rows={3}
                        required
                    ></StyledTextArea>
                    <label htmlFor="password">Password</label>
                    <StyledFormInput
                        placeholder='Password'
                        name='password'
                        id='password'
                        type='text'
                        value={formData.password}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFormChange(e)}
                        required={type === 'New' ? true : false}
                    ></StyledFormInput>
                    <StyledRadio >
                        <input
                            type="radio"
                            id='active'
                            name='status'
                            value='Active'
                            defaultChecked={formData.status === 'Active' ? true : false}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFormChange(e)} />
                        <label htmlFor="active">Active</label>
                        <input
                            type="radio"
                            id='inactive'
                            name='status'
                            value='Inactive'
                            defaultChecked={formData.status === 'Inactive' ? true : false}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFormChange(e)} />
                        <label htmlFor="inactive">Inactive</label>
                    </StyledRadio>
                    <StyledButton $name="login" type="submit" >
                        {type} User
                    </StyledButton>
                </StyledFormContainer>
            </StyledFormWrapper>
        </>
    )
}

export default UserForm