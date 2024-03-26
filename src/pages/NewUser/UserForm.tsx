import React, { useState } from 'react';
import { StyledFormContainer, StyledFormInput, StyledFormWrapper, StyledTextArea, StyledFormSelect } from '../../components/reusable/StyledForm';
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
    const [formData, setFormData] = useState<UserInterface>({ ...singleUser });
    const [spinner, setSpinner] = useState<boolean>(true);
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
    }

    return (
        <>
            <StyledButton $name='goBack' onClick={() => { navigate('/users') }}>
                Go back
            </StyledButton>
            <StyledFormWrapper>
                <StyledFormContainer onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}>
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
                        value={formData.description}
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleFormChange(e)}
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