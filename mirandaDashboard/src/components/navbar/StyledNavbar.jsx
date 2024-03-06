import styled from "styled-components";

export const StyledNavbarWrapper = styled.div`
    height: 3.5em;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    padding: 0 10rem 0 3rem;
    margin-top: 0;

    >div {
        display: flex;
        width: 20%;
        margin-right: 10%;
        justify-content: space-around;
    }

    ${(props) =>
        props.$isopen === 'true' && `
        margin-left: 17%;
        width: 82.5%;
        `
    }
`;