import styled from "styled-components";

export const StyledNavbarWrapper = styled.div`
    height: 7.5em;
    width: 100%;
    display: flex;
    background-color: #fff;

    ${(props) =>
        props.isopen === 'true' && `
        margin-left: 17%;
        width: 82.5%;
        `
    }
`;