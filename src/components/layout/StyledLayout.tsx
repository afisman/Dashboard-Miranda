import styled from "styled-components";

export const StyledLayout = styled.div<{ $sidebaropen: string }> `
    ${(props) =>
        props.$sidebaropen === 'true' && `margin-left: 17%;`
    }
`;

export const StyledContainer = styled.div`
    display: flex;
`;