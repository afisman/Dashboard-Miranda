import React, { useState } from 'react';
import { StyledFormContainer, StyledFormInput, StyledFormWrapper } from '../../components/reusable/StyledForm';
import { StyledButton } from '../../components/reusable/StyledButton';
import { useAuth } from '../../context/AuthContext';
import { Navigate, useNavigate } from 'react-router-dom';
import { loginApi } from '../../utils/callApi';
import { toast } from 'react-toastify';




const LoginPage = () => {

    const { state, dispatch } = useAuth()
    const [email, setEmail] = useState<string>('Madonna5@hotmail.com');
    const [password, setPassword] = useState<string>('dipawapaze');
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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        try {
            const response = await loginApi(email, password);
            if (response.email) {
                dispatch({ type: 'login', payload: { auth: true, user: response.name, email: response.email, token: response.token } });
                navigate('/');
                setError(false);
            } else {
                setError(true)
            }

        } catch (error) {
            toast('Wrong email or password, please try again!')
            console.error(error)
        }
    }

    return (
        <> {
            state.auth ? (
                <Navigate to='/' />
            ) : (
                <StyledFormWrapper>
                    <StyledFormContainer onSubmit={(e) => handleSubmit(e)}>
                        <StyledFormInput
                            placeholder='Email'
                            type='email'
                            name='email'
                            defaultValue={'Madonna5@hotmail.com'}
                            onChange={handleEmailChange}
                        ></StyledFormInput>
                        <StyledFormInput
                            placeholder='Password'
                            type='password'
                            name='password'
                            defaultValue={'dipawapaze'}
                            onChange={handlePasswordChange}
                        ></StyledFormInput>
                        <StyledButton $name='login' type='submit'>
                            LOGIN
                        </StyledButton>
                        <p>Madonna5@hotmail.com</p>
                        <p>dipawapaze</p>
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