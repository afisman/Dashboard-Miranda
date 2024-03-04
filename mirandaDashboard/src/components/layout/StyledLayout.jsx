import styled from "styled-components";

export const StyledLayout = styled.div`
    ${(props) =>
        props.sidebaropen === 'true' &&
        `
            margin-left: 17%;
        `
    }
    margin-top: 3rem;
`;

export const StyledContainer = styled.div`
  display: flex;
`;