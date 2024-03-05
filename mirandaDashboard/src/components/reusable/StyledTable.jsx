import styled from "styled-components";

export const StyledTable = styled.table`
    background-color:#fff;
    width: 95%;
    height: auto;
    margin: 0 auto;
    border-radius: 8px;
`;

export const StyledTableBody = styled.tbody``;

export const StyledTableRow = styled.tr`
    border: 0.1px solid #d1d1d1;
    &:hover {
        box-shadow: 0px 1px 2px 1px #575757;
        cursor: pointer;
        border-radius: 1px;
    }
`;

export const StyledTableHeader = styled.th`
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    text-align: left;
    border-bottom: 1px solid #f8f8f8;
    padding: 1em 0.5em;
`;

export const StyledTableCell = styled.td`
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    color: #393939;
    margin: 0 auto;
    border-bottom: 1px solid #f8f8f8f8;
    min-height: 3.5em;
    padding-left: 0.5em;

    ${(props) =>
        props.name === 'facilities' &&
        `
        width:30%;
        `
    }
    ${(props) =>
        props.name === 'rate' &&
        `
        display: flex;
        align-items: center;
        `
    }
      ${(props) =>
        props.name === 'imageCell' &&
        `
        display: flex;
        align-items: center;
        `
    }
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
        props.letterstyle === "semiBold" &&
        `
        font-weight: 600;
        color: #393939;
        padding-right: 0.25em;
        margin: 0;
        `}

    ${(props) =>
        props.letterstyle === "id" &&
        `
        font-size: 0.8rem;
        color: #799283;
        margin: 0;`}

    ${(props) =>
        props.letterstyle === "subtitle" &&
        `
        font-size: 0.8rem;
        color: #393939;
        margin: 0;`}
         ${(props) =>
        props.letterstyle === "Active" &&
        `
        font: normal normal 600 14px/21px Poppins;
        color: #5AD07A;
        margin: 0;`}
         ${(props) =>
        props.letterstyle === "Inactive" &&
        `
        font: normal normal 600 14px/21px Poppins;
        color: #E23428;
        margin: 0;`}
`;

export const StyledTableCellImg = styled.div`
        border-radius: 5px;

        >img {
            object-fit: cover;
            width: 100%;
            border-radius: 5px;
            height: 100%;
        }

        ${(props) =>
        props.imgtype === "guest" &&
        `
        width: 45px;
        height: 45px;
        `}
         ${(props) =>
        props.imgtype === "concierge" &&
        `
        width: 44px;
        height: 44px;
        `}

         ${(props) =>
        props.imgtype === "room" &&
        `
        width: 80px;
        height: 37px;
        `}
`;


