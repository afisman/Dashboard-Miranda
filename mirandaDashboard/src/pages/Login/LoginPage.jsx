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

    let location = useLocation();
    let from = location.state?.from?.pathname || "/";


    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await auth.login(email, password);
            localStorage.setItem('isLoggedIn', 'true');
            navigate(from, { replace: true });
        } catch (error) {
            return alert(`Error while trying ot sign in, ${error}`);
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
                    <StyledButton name="login" type="submit">
                        LOGIN
                    </StyledButton>
                    <p>alejandro@admin.com</p>
                    <p>alejandro1</p>
                </StyledFormContainer>
            </StyledFormWrapper>
        </>
    )
}

export default LoginPage