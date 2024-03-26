import styled from "styled-components";

export const StyledMenuWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 2em;
    align-items: center;
`;
export const StyledMenu = styled.div`
    display: flex;
    min-width: 34em;
    width: 30%;
    margin:0 2em 2em 2em;
`;

export const StyledMenuText = styled.p<{ $selected?: string }>`
    width: 30%;
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    color: #6E6E6E;
    text-align: center;
    padding-bottom: 1em;
    cursor: pointer;
    border-bottom: 1px solid #c8c8c8;

    ${(props) =>
        props.$selected &&
        `
        color: #135846;
        border-bottom: 2px solid #135846;
        `
    }
`;

export const StyledSelect = styled.select`
    width: 8.375em;
    height: 3em;
    border: 1px solid #135846;
    color: #135846;
    font-size: 1rem;
    font-weight: 500;
    margin-right: 2em;
    border-radius: 0.5em;
    text-align: center;

    &::after {
        padding-right: 0.5em;
        color: #CCC;
    }
`;

export const StyledMenuButtons = styled.div<{ $type?: string }>`
    display: flex;
    /* align-items: center; */
    gap: 2em;

    ${(props) =>
        props.$type === 'pagination' &&
        `
        width:50%;
        margin: 1em auto;
        justify-content: center;
        `
    }
`;

