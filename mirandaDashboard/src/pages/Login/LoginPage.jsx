import React from 'react';
import { StyledFormContainer, StyledFormInput, StyledFormWrapper } from '../../components/reusable/StyledForm';
import { StyledButton } from '../../components/reusable/StyledButton';



const LoginPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('second')

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

            localStorage.setItem('isLoggedIn', 'true')
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