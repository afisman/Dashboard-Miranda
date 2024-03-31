import React, { useState } from 'react';
import { StyledFormContainer, StyledFormInput, StyledFormWrapper } from '../../components/reusable/StyledForm';
import { StyledButton } from '../../components/reusable/StyledButton';
import { useAuth } from '../../context/AuthContext';
import { Navigate, useNavigate } from "react-router-dom";



const LoginPage = () => {

    const { state, dispatch } = useAuth()
    const [email, setEmail] = useState<string>('alejandro@admin.com');
    const [password, setPassword] = useState<string>('admin');
    const [error, setError] = useState<boolean>(false)
    const navigate = useNavigate();


    const handleEmailChange = (e: React.FormEvent<HTMLInputElement>): void => {
        setError(false);

        setEmail(e.currentTarget.value);
    }

    const handlePasswordChange = (e: React.FormEvent<HTMLInputElement>): void => {
        setError(false);

        setPassword(e.currentTarget.value);
    }

    const handleSubmit = async (e: React.FormEvent<HTMLInputElement>): Promise<void> => {
        e.preventDefault();
        if (email === 'alejandro@admin.com' && password === 'admin') {
            dispatch({ type: 'login', payload: { auth: true, user: 'Alejandro Fisman', email: 'alejandro@admin.com' } });
            navigate('/');
            setError(false);
        }
    }

    return (
        <> {
            state.auth ? (
                <Navigate to='/' />
            ) : (
                <StyledFormWrapper>
                    <StyledFormContainer onSubmit={handleSubmit}>
                        <StyledFormInput
                            placeholder='Email'
                            type='email'
                            name='email'
                            defaultValue={'alejandro@admin.com'}
                            onChange={handleEmailChange}
                        ></StyledFormInput>
                        <StyledFormInput
                            placeholder='Password'
                            type='password'
                            name='password'
                            defaultValue={'admin'}
                            onChange={handlePasswordChange}
                        ></StyledFormInput>
                        <StyledButton $name="login" type="submit">
                            LOGIN
                        </StyledButton>
                        <p>alejandro@admin.com</p>
                        <p>admin</p>
                        {error &&
                            <p>Incorrect email or password</p>
                        }
                    </StyledFormContainer>
                </StyledFormWrapper>
            )
        }
        </>
    )
}

export default LoginPage