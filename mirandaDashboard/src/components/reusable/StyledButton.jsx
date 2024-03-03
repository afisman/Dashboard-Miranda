import styled from "styled-components";

export const StyledButton = styled.button`
    cursor: pointer;
    border: none;

    ${(props) =>
        props.name === "login" &&
        `
            width:25%;
            margin: 0 auto;
            font-size: 1.25rem;
            font-family: 'Poppins', sans-serif;
            font-weight: 500;
            background: #135846;
            border-radius: 5px;
            box-shadow: 2px 0 6px 2px #135846;
    `
    }
`;