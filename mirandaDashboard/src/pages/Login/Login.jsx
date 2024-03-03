import React from 'react';
import { StyledFormContainer, StyledFormInput, StyledFormWrapper } from '../../components/reusable/StyledForm';
import { StyledButton } from '../../components/reusable/StyledButton';



const Login = () => {
    return (
        <>
            <StyledFormWrapper>
                <StyledFormContainer>
                    <StyledFormInput
                        placeholder='Email'
                        type='email'
                    ></StyledFormInput>
                    <StyledFormInput
                        placeholder='Password'
                        type='password'
                    ></StyledFormInput>
                    <StyledButton name="login" type="submit">
                        LOGIN
                    </StyledButton>
                </StyledFormContainer>
            </StyledFormWrapper>
        </>
    )
}

export default Login