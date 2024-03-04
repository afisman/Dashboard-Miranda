import React, { useState } from 'react';
import { StyledFormContainer, StyledFormInput, StyledFormWrapper } from '../../components/reusable/StyledForm';
import { StyledButton } from '../../components/reusable/StyledButton';
import { useNavigate } from 'react-router-dom';



const LoginPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('second');
    const navigate = useNavigate();


    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (email !== 'alejandro@admin.com' || password !== 'alejandro1') {
            return alert('Error while trying ot sign in, check information in form')
        } else {
            const body = JSON.stringify({
                email: email,
                password: password,
            });
            console.log('correct')

            localStorage.setItem('isLoggedIn', 'true');
            navigate('/dashboard')
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