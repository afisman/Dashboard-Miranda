import React, { useState } from 'react';
import { StyledFormContainer, StyledFormInput, StyledFormWrapper } from '../../components/reusable/StyledForm';
import { StyledButton } from '../../components/reusable/StyledButton';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth.context';


const LoginPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const auth = useAuth();
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

        try {
            await auth.login(email, password);
            navigate('/dashboard', { replace: true });
        } catch (error) {
            setError(true);
        }
    }

    return (
        <>
            <StyledFormWrapper>
                <StyledFormContainer onSubmit={handleSubmit}>
                    <StyledFormInput
                        placeholder='Email'
                        type='email'
                        value={email}
                        onChange={handleEmailChange}
                    ></StyledFormInput>
                    <StyledFormInput
                        placeholder='Password'
                        type='password'
                        value={password}
                        onChange={handlePasswordChange}
                    ></StyledFormInput>
                    <StyledButton $name="login" type="submit">
                        LOGIN
                    </StyledButton>
                    <p>alejandro@admin.com</p>
                    <p>alejandro1</p>
                    {error &&
                        <p>Incorrect email or password</p>
                    }
                </StyledFormContainer>
            </StyledFormWrapper>
        </>
    )
}

export default LoginPage