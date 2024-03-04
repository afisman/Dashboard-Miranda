import styled from "styled-components";
import { IoBedOutline } from "react-icons/io5";
import { PiCalendarCheckBold } from "react-icons/pi";
import { TbLogin2, TbLogin } from "react-icons/tb";


export const StyledKPIWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: transparent;
`;

export const StyledKPIcard = styled.div`
    display: flex;
    padding: 2em;
    border-radius: 0.75em;

    >.active {
        box-shadow: 0px 16px 30px #00000014;  
  }
`;
const StyledKPIIcon = `
    padding: 1.437em 1.125em 1.375em 1.187em;
    width: 1.75em;
    height: 1.25em;
    color: #E23428;
    background-color: #FFEDEC;
    border-radius: 0.5em;
    margin: 1.875em ;
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
`;