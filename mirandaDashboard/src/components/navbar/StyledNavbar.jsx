import styled from "styled-components";

export const StyledNavbarWrapper = styled.div`
    height: 3.5em;
    width: 100%;
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    background-color: #fff;

    ${(props) =>
        props.isopen === 'true' && `
        margin-left: 17%;
        width: 82.5%;
        `
    }
`;