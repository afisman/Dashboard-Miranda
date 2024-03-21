import React, { useState } from 'react';
import { StyledFormContainer, StyledFormInput, StyledFormWrapper } from '../../components/reusable/StyledForm';
import { StyledButton } from '../../components/reusable/StyledButton';
import { useAuth } from '../../context/AuthContext';
import { Navigate } from "react-router-dom";

const LoginPage = () => {

    const { state, dispatch } = useAuth()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false)


    const handleEmailChange = (e) => {
        setError(false);

        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setError(false);

        setPassword(e.target.value);
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (e.target.email.value === 'alejandro@admin.com' && e.target.password.value === 'admin') {
            dispatch({
                type: 'login', payload: {
                    email,
                    fullName: 'Alejandro'
                }
            })
            setError(false)
        }
    }

    return (
        <> {
            state.isAuthenticated ? (
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