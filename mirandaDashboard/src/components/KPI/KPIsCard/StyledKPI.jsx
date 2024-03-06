import styled from "styled-components";
import { IoBedOutline } from "react-icons/io5";
import { PiCalendarCheckBold } from "react-icons/pi";
import { TbLogin2, TbLogin } from "react-icons/tb";


export const StyledKPIWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: transparent;
    padding: 0 2rem;    
    margin: 2em 1em 20em 1em;
    
`;

export const StyledKPIcard = styled.div`
    display: flex;
    padding: 0.5em ;
    border-radius: 0.75em;
    width: 22%;
    background-color: #fff;
    > .active {
        box-shadow: 0px 16px 30px #00000014;  
  }
`;
const StyledKPIIcon = `
    padding: 1.437em 1.125em 1.375em 1.187em;
    width: 28px;
    height: 20px;
    color: #E23428;
    background-color: #FFEDEC;
    border-radius: 0.5em;
    margin: 0.875em ;
`;

export const StyledBedIcon = styled(IoBedOutline)`
    ${StyledKPIIcon}
`;

export const StyledCalendarIcon = styled(PiCalendarCheckBold)`
    ${StyledKPIIcon}
`;

export const StyledCheckIn = styled(TbLogin)`
    ${StyledKPIIcon}
`;

export const StyledCheckOut = styled(TbLogin2)`
    ${StyledKPIIcon}
`;

export const StyledKPIText = styled.div`
    padding: .875rem 0;
        margin: 0 .875rem 0;

    >h4 {
        color: #393939;
        font-size: 30px;
        margin: 0;
        line-height: 46px;
        font-family: 'Poppins', sans-serif;
        opacity: 1;
        font-weight: 600;
    }

    >p {
        margin: 0;
        font-family: 'Poppins', sans-serif;
        color: #787878;
        font-size: 14px;
        line-height: 21px;
        font-weight: 300;
    }
`;