import styled from "styled-components";

export const StyledSpinner = styled.div`

    width: 50px;
    aspect-ratio: 1;
    border-radius: 50%;
    border: 8px solid;
    border-color: #000 #0000;
    animation: l1 1s infinite;
    margin: 5em auto 0 auto;

    @keyframes l1 {to{ transform: rotate(.5turn) } }
`;

