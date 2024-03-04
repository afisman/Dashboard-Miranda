import styled from "styled-components";

export const StyledTable = styled.table`
    background-color:#fff;
    width: 100%;
    height: auto;
    margin-left: 2rem;

`;

export const StyledTableBody = styled.tbody``;

export const StyledTableRow = styled.tr``;

export const StyledTableHeader = styled.th`
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    text-align: left;
    border-bottom: 1px solid #f8f8f8;
    padding: 1em 0;
`;

export const StyledTableCell = styled.td`
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    color: #393939;
    margin: 0 auto;
    border-bottom: 1px solid #f8f8f8f8;
    height: 3.5em;

`;

export const StyledTableCellText = styled.p`
padding-left: 0.5rem;
  ${(props) =>
        props.letterstyle === "title" &&
        `
        font-weight: 500;
        color: #393939;
        margin: 0;
        `}

  ${(props) =>
        props.letterstyle === "titleSemiBold" &&
        `
        font-weight: 600;
        color: #393939;
        padding-right: 0.25em;
        margin: 0;
        `}

    ${(props) =>
        props.letterstyle === "id" &&
        `
        font-size: 0.875rem;
        color: #799283;
        margin: 0;`}

    ${(props) =>
        props.letterstyle === "subtitle" &&
        `
        font-size: 0.875rem;
        color: #393939;
        margin: 0;`}
`;

