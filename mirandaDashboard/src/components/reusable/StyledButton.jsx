import styled from "styled-components";

export const StyledButton = styled.button`
    cursor: pointer;
    border: none;

    ${(props) =>
        props.name === "login" &&
        `
            border-radius: 8px;
            background: #EBF1EF 0% 0% no-repeat padding-box;
            opacity: 1;
            font-family: "Poppins", sans-serif;
            font-size: 1rem;
            line-height: 1.25rem;
            font-weight: 600;
            letter-spacing: 0;
            color: #135846;
            border: none;
            padding: 1rem 2rem;
            cursor: pointer;
            margin: 0 auto;
    `
    }
`;