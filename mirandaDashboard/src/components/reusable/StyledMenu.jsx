import styled from "styled-components";

export const StyledMenu = styled.div`
    display: flex;
    min-width: 34em;
    width: 30%;
    margin:0 2em 2em 2em;
    border-bottom: 1px solid #c8c8c8;

    &.active {

    }
`;

export const StyledMenuText = styled.p`
    width: 30%;
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    color: #6E6E6E;
    text-align: center;
    padding-bottom: 1em;
    cursor: pointer;
`;
