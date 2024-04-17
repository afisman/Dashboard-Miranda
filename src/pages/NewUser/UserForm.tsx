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
    const [formData, setFormData] = useState<UserInterface>({ ...singleUser });
    const dispatch = useAppDispatch();
    const [canSubmit, setCanSubmit] = useState(false)

    const isFormFilled = () => {
        let formFilled = true;
        let values = Object.values(formData);
        for (let i = 0; i < values.length; i++) {
            if (values[i] === '' || values[i] === undefined || values[i] === null) {
                formFilled = false
            }
        }

        if (formFilled === true) {
            setCanSubmit(true);
        } else {
            setCanSubmit(false)
        }
    }


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

    useEffect(() => {
        isFormFilled();
    }, [formData])

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
                    <label htmlFor="full_name">Employee name</label>
                    <StyledFormInput
                        placeholder='Full name'
                        name='full_name'
                        id='full_name'
                        type='string'
                        value={formData.full_name}
                        onChange={(e) => handleFormChange(e)}
                    ></StyledFormInput>
                    <label htmlFor="email">Email</label>
                    <StyledFormInput
                        placeholder='Email'
                        name='email'
                        id='email'
                        type='email'
                        value={formData.email}
                        onChange={(e) => handleFormChange(e)}
                    ></StyledFormInput>
                    <label htmlFor="contact">Phone number</label>
                    <StyledFormInput
                        placeholder='Phone number'
                        name='contact'
                        id='contact'
                        type='number'
                        value={type === 'Edit' ? Number(formData.contact.split('-').join('')) : undefined}
                        onChange={(e) => handleFormChange(e)}
                    ></StyledFormInput>
                    <label htmlFor="photo">Image</label>
                    <StyledFormInput
                        placeholder='Enter photo link'
                        name='photo'
                        id='photo'
                        type='photo'
                        value={formData.photo}
                        onChange={(e) => handleFormChange(e)}
                    ></StyledFormInput>
                    <label htmlFor="start_date">Starting date</label>
                    <StyledFormInput
                        placeholder='Start Date'
                        name='start_date'
                        type='date'
                        value={new Date(formData.start_date).toISOString().slice(0, 10)}
                        onChange={(e) => handleFormChange(e)}
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
                    ></StyledTextArea>
                    <label htmlFor="password">Password</label>
                    <StyledFormInput
                        placeholder='Password'
                        name='password'
                        id='password'
                        type='text'
                        value={formData.password}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFormChange(e)}
                    ></StyledFormInput>
                    <StyledRadio >
                        <input type="radio" id='active' name='status' value='Active' defaultChecked onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFormChange(e)} />
                        <label htmlFor="active">Active</label>
                        <input type="radio" id='inactive' name='status' value='Inactive' onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFormChange(e)} />
                        <label htmlFor="inactive">Inactive</label>
                    </StyledRadio>

                    <StyledButton $name="login" type="submit" disabled={canSubmit ? false : true}>
                        {type} User
                    </StyledButton>
                </StyledFormContainer>
            </StyledFormWrapper>
        </>
    )
}

export default UserForm