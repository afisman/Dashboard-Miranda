import styled from "styled-components";

export const StyledNavbarWrapper = styled.div < { $isopen: string } > `
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
        min-width: 25%;
        margin-right: 10%;
        justify-content: space-around;
        align-items: center;
        gap: 1em;
    }

    ${(props) =>
        props.$isopen === 'true' && `
        margin-left: 17%;
        width: 82.5%;
        `
    }
`;

export const StyledNavbarTitle = styled.p`
    font-size: 1.75em;
    font-weight: 600;
    color: #262626;
    line-height: 2.625;
`;