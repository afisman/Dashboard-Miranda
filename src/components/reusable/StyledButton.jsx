import styled from "styled-components";

export const StyledButton = styled.button`
    cursor: pointer;
    border: none;
    opacity: 1;
    font-size: 0.9rem;
    line-height: 1.25rem;
    border-radius: 0.75em;
    margin: 0 auto;
    border: none;


    ${(props) =>
        props.$name === "login" &&
        `
            background: #EBF1EF 0% 0% no-repeat padding-box;
            font-weight: 600;
            color: #135846;
            padding: 0.5rem 1rem;
    `
    }
    ${(props) =>
        props.$name === "view_notes" &&
        `
            background: #EEF9F2 0% 0% no-repeat padding-box;
            font-weight: 500;
            color: #212121;
            padding: 0.5rem 1rem;
    `
    }
    ${(props) =>
        props.$name === "refund" &&
        `
            background: #FFEDEC 0% 0% no-repeat padding-box;
            font-weight: 500;
            color: #E23428;
            padding: 0.5rem 1rem;
            width: 109px;
    `
    }
    ${(props) =>
        props.$name === "booked" &&
        `
            background: #E8FFEE 0% 0% no-repeat padding-box;
            font-weight: 500;
            color: #5AD07A;
            padding: 0.5rem 1rem;
            width: 109px;
    `
    }
    ${(props) =>
        props.$name === "pending" &&
        `
            background: #E2E2E2 0% 0% no-repeat padding-box;
            font-weight: 500;
            color: #6D6D6D;
            padding: 0.5rem 1rem;
            width: 109px;
    `
    }
    ${(props) =>
        props.$name === "cancelled" &&
        `
            background: #575757 0% 0% no-repeat padding-box;
            font-weight: 500;
            color: #BEBEBE;
            padding: 0.5rem 1rem;
            width: 109px;
    `
    }
       ${(props) =>
        props.$name === "Booked" &&
        `
            background: #E23428 0% 0% no-repeat padding-box;
            font-weight: 500;
            color: #fff;
            padding: 0.5rem 1rem;
            width: 109px;
    `
    }

      ${(props) =>
        props.$name === "Available" &&
        `
            background: #5AD07A 0% 0% no-repeat padding-box;
            font-weight: 500;
            color: #fff;
            padding: 0.5rem 1rem;
            width: 109px;
    `
    }
    ${(props) =>
        props.$name === "card" &&
        `
            background-color: #135846;
            font-weight: 500;
            color: #fff;
            padding: 0.5rem 1rem;
            display:flex;
            align-items:center;
    `
    }
     ${(props) =>
        props.$name === "facilities2" &&
        `
            background: #EBF1EF 0% 0% no-repeat padding-box;
            font-weight: 600;
            font-size: 0.6em;
            color: #135846;
            padding: 0.5em 1em;
    `
    }
    ${(props) =>
        props.$name === 'new' &&
        `
            background-color: #135846;
            color: #fff;
            font-weight: 500;
            padding: 1em 2em;
            text-decoration:none;
            display:flex;
            align-items:center;
            justify-content: center;
            min-width: 10em;
        `
    }

    ${(props) =>
        props.$name === 'pagination' &&
        `
            background-color: #135846;
            color: #fff;
            font-weight: 500;
            padding: 1em;
            min-width: 10em;
            margin: 0;

            &:disabled {
                background-color: #d9e0de;
            }
        `
    }
`;