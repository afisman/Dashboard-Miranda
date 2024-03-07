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
   margin-bottom: 2em;
   width: 70%;
   text-align: left;
`;

export const StyledCardInfo = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1em;

     ${(props) =>
        props.$type === "check" &&
        `
        border-bottom: 1px solid #CCC;
        `
    }
`;

export const StyledCardText = styled.p`
    font-size: 0.875rem;
    margin: 0.5em;

    /* >div {
        height: auto;
    } */
    ${(props) =>
        props.$lettertype === "title" &&
        `
        color: #212121;
        font-size: 2em;
        font-weight: 600;
        line-height: 3em;
        `
    }
    ${(props) =>
        props.$lettertype === "id" &&
        `
        line-height:1.25em;
        color: #799283;
        padding-left:1em;
        `
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
      ${(props) =>
        props.$lettertype === "rate" &&
        `
        color: #212121;
        font-weight: 500;
        font-size:1.25rem;
        display: flex;
        align-items: center;
        `
    }

`;

export const StyledButtonGroup = styled.div`
    display: flex;
    gap: 1em;
    margin: 1em 0;

    ${(props) =>
        props.$type === "large" &&
        `
        width: 90%
        `
    }
    ${(props) =>
        props.$type === "small" &&
        `
        width: 60%
        `
    }
`;

