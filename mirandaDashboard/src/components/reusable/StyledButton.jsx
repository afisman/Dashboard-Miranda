import styled from "styled-components";

export const StyledButton = styled.button`
    cursor: pointer;
    border: none;

    ${(props) =>
        props.name === "login" &&
        `
            border-radius: 8px;
            background: #EBF1EF 0% 0% no-repeat padding-box;
            opacity: 1;
            font-family: "Poppins", sans-serif;
            font-size: 1rem;
            line-height: 1.25rem;
            font-weight: 600;
            letter-spacing: 0;
            color: #135846;
            border: none;
            padding: 1rem 2rem;
            cursor: pointer;
            margin: 0 auto;
    `
    }
    ${(props) =>
        props.name === "view_notes" &&
        `
            border-radius: 12px;
            background: #EEF9F2 0% 0% no-repeat padding-box;
            opacity: 1;
            font-family: "Poppins", sans-serif;
            font-size: 0.9rem;
            line-height: 1.25rem;
            font-weight: 500;
            letter-spacing: 0;
            color: #212121;
            border: none;
            padding: 0.5rem 1rem;
            cursor: pointer;
            margin: 0 auto;
    `
    }
    ${(props) =>
        props.name === "refund" &&
        `
            border-radius: 12px;
            background: #FFEDEC 0% 0% no-repeat padding-box;
            opacity: 1;
            font-family: "Poppins", sans-serif;
            font-size: 0.9rem;
            line-height: 1.25rem;
            font-weight: 500;
            letter-spacing: 0;
            color: #E23428;
            border: none;
            padding: 0.5rem 1rem;
            cursor: pointer;
            margin: 0 auto;
            width: 109px;
    `
    }
    ${(props) =>
        props.name === "booked" &&
        `
            border-radius: 12px;
            background: #E8FFEE 0% 0% no-repeat padding-box;
            opacity: 1;
            font-family: "Poppins", sans-serif;
            font-size: 0.9rem;
            line-height: 1.25rem;
            font-weight: 500;
            letter-spacing: 0;
            color: #5AD07A;
            border: none;
            padding: 0.5rem 1rem;
            cursor: pointer;
            margin: 0 auto;
            width: 109px;
    `
    }
    ${(props) =>
        props.name === "pending" &&
        `
            border-radius: 12px;
            background: #E2E2E2 0% 0% no-repeat padding-box;
            opacity: 1;
            font-family: "Poppins", sans-serif;
            font-size: 0.9rem;
            line-height: 1.25rem;
            font-weight: 500;
            letter-spacing: 0;
            color: #6D6D6D;
            border: none;
            padding: 0.5rem 1rem;
            cursor: pointer;
            margin: 0 auto;
            width: 109px;
    `
    }
    ${(props) =>
        props.name === "cancelled" &&
        `
            border-radius: 12px;
            background: #575757 0% 0% no-repeat padding-box;
            opacity: 1;
            font-family: "Poppins", sans-serif;
            font-size: 0.9rem;
            line-height: 1.25rem;
            font-weight: 500;
            letter-spacing: 0;
            color: #BEBEBE;
            border: none;
            padding: 0.5rem 1rem;
            cursor: pointer;
            margin: 0 auto;
            width: 109px;
    `
    }
`;