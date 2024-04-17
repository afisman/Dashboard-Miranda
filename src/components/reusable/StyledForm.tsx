import styled from "styled-components";


export const StyledFormWrapper = styled.div`
    margin: 2em auto;
    width: 28em;
    text-align: center;
    box-shadow: 0px 20px 30px #00000014;
    padding: 2em;
`;

export const StyledFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
`;

export const StyledFormInput = styled.input`
    height: 1.687em;
    background: #e2e8e3f8;
    font-family: "Poppins", sans-serif;
    border: none;
    border-radius: 0.25em;
    margin-bottom: 1.875em;

    &::placeholder {
            color: #135846;
    }
`;

export const StyledTextArea = styled.textarea`
    background: #e2e8e3f8;
    font-family: "Poppins", sans-serif;
    border: none;
    color: #135846;
    margin-bottom: 1.875em;
    border-radius: 0.25em;
    padding: 0.5em;

    &::focus {
        border: 1px solid #135846;
    }

    &::placeholder {
            color: #135846;
    }
`;

export const StyledFormSelect = styled.select`
        background: none;
        border: none;
        margin-bottom: 1.875em;
        border-bottom: 1px solid #135846;
        font-family: "Poppins", sans-serif;
        color: #135846;
`;

export const StyledRadio = styled.div`
display: flex;
margin-bottom: 1.875em;
`