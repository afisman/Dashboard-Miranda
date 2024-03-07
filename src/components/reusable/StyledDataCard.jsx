import styled from "styled-components";

export const StyledCardWrapper = styled.div`
    width: 80%;
    margin: 3em auto;
    display: flex;
    border-radius: 1em;
    background-color: #fff;
`;

export const StyledCardLeft = styled.div`
flex: 1 1 0;
    padding: 2em;
`;
export const StyledCardRight = styled.div`
    flex: 1 1 0;
`;

export const StyledCardTop = styled.div`
   
`;

export const StyledCardInfo = styled.div`
    display: flex;
    justify-content: space-between;

     ${(props) =>
        props.$type === "check" &&
        `
        border-bottom: 1px solid #CCC;
        `
    }
`;

export const StyledCardText = styled.p`
    font-size: 0.875rem;
    margin: 0;

    >div {
        height: auto;
    }
    ${(props) =>
        props.$lettertype === "check" &&
        `
        color: #6E6E6E;
        `
    }
    ${(props) =>
        props.$lettertype === "date" &&
        `
        color: #212121;
        font-weight: 500;
        `
    }
      ${(props) =>
        props.$lettertype === "info" &&
        `
        color: #212121;
        font-weight: 500;
        font-size:1.25rem;
        `
    }

`;

