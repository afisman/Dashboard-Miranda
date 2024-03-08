import React, { useState } from 'react';
import { StyledFormContainer, StyledFormInput, StyledFormWrapper } from '../../components/reusable/StyledForm';
import { StyledButton } from '../../components/reusable/StyledButton';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth.context';


const LoginPage = ({ auth, setAuth }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    // const auth = useAuth();
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
            setAuth(true)
            navigate('/');
        }

        try {
            await auth.login(email, password);
            navigate('/', { replace: true });
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
                        name='email'
                        value={'alejandro@admin.com'}
                        onChange={handleEmailChange}
                    ></StyledFormInput>
                    <StyledFormInput
                        placeholder='Password'
                        type='password'
                        name='password'
                        value={'admin'}
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
        </>
    )
}

export default LoginPage