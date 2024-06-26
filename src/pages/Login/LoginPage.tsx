import React, { useState } from 'react';
import { StyledFormContainer, StyledFormInput, StyledFormWrapper } from '../../components/reusable/StyledForm';
import { StyledButton } from '../../components/reusable/StyledButton';
import { useAuth } from '../../context/AuthContext';
import { Navigate, useNavigate } from 'react-router-dom';
import { loginApi } from '../../utils/callApi';
import { toast } from 'react-toastify';




const LoginPage = () => {

    const { state, dispatch } = useAuth()
    const [email, setEmail] = useState<string>('Trever62@gmail.com');
    const [password, setPassword] = useState<string>('gamiracusa');
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
                <StyledFormWrapper $type={'login'}>
                    <StyledFormContainer onSubmit={(e) => handleSubmit(e)}>
                        <StyledFormInput
                            placeholder='Email'
                            type='email'
                            name='email'
                            defaultValue={'Trever62@gmail.com'}
                            onChange={(e) => handleEmailChange(e)}
                        ></StyledFormInput>
                        <StyledFormInput
                            placeholder='Password'
                            type='password'
                            name='password'
                            defaultValue={'gamiracusa'}
                            onChange={(e) => handlePasswordChange(e)}
                        ></StyledFormInput>
                        <StyledButton $name='login' type='submit'>
                            LOGIN
                        </StyledButton>
                        <p>Trever62@gmail.com</p>
                        <p>gamiracusa</p>
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