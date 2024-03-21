import styled from "styled-components";

const SButton = styled.button`
    cursor: pointer;
    border: none;
    opacity: 1;
    font-size: 0.9rem;
    line-height: 1.25rem;
    border-radius: 0.75em;
    margin: 0 auto;
    border: none;
    background-color: #fff;


    ${(props) =>
        props.$name === "danger" &&
        `
            background-color: #ef4111;
            font-weight: 600;
            color: #e4efec;
            padding: 0.5rem 1rem;
    `
    }
    
`;
const ButtonStyled = ({ $name, children, onClick }) => {
    return (
        <SButton onClick={onClick} $name={$name}>
            {children}
        </SButton>
    )
}

export default ButtonStyled

