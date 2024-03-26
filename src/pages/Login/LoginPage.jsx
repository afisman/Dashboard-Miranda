// import React, { useState } from 'react';
// import { StyledFormContainer, StyledFormInput, StyledFormWrapper } from '../../components/reusable/StyledForm';
// import { StyledButton } from '../../components/reusable/StyledButton';
// import { useAuth } from '../../context/AuthContext.tsx';
// import { Navigate, useNavigate } from "react-router-dom";

// interface FormData extends EventTarget {
//     user: HTMLFormElement,
//     password: HTMLFormElement
// }

// const LoginPage = () => {

//     const { state, dispatch } = useAuth()
//     const [email, setEmail] = useState < string > ('');
//     const [password, setPassword] = useState < string > ('');
//     const [error, setError] = useState(false)
//     const navigate = useNavigate();


//     const handleEmailChange = (e) => {
//         setError(false);

//         setEmail(e.target.value);
//     }

//     const handlePasswordChange = (e) => {
//         setError(false);

//         setPassword(e.target.value);
//     }


//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (e.target.email.value === 'alejandro@admin.com' && e.target.password.value === 'admin') {
//             dispatch({ type: 'login', payload: { auth: true, user: 'Alejandro Fisman', email: 'alejandro@admin.com' } });
//             navigate('/');
//             setError(false);
//         }
//     }

//     return (
//         <> {
//             state.isAuthenticated ? (
//                 <Navigate to='/' />
//             ) : (
//                 <StyledFormWrapper>
//                     <StyledFormContainer onSubmit={handleSubmit}>
//                         <StyledFormInput
//                             placeholder='Email'
//                             type='email'
//                             name='email'
//                             defaultValue={'alejandro@admin.com'}
//                             onChange={handleEmailChange}
//                         ></StyledFormInput>
//                         <StyledFormInput
//                             placeholder='Password'
//                             type='password'
//                             name='password'
//                             defaultValue={'admin'}
//                             onChange={handlePasswordChange}
//                         ></StyledFormInput>
//                         <StyledButton $name="login" type="submit">
//                             LOGIN
//                         </StyledButton>
//                         <p>alejandro@admin.com</p>
//                         <p>admin</p>
//                         {error &&
//                             <p>Incorrect email or password</p>
//                         }
//                     </StyledFormContainer>
//                 </StyledFormWrapper>
//             )
//         }
//         </>
//     )
// }

// export default LoginPage