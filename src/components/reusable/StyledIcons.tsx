import { IoIosSearch } from "react-icons/io";
import { FiBell } from "react-icons/fi";
import { MdOutlineMail, MdDeleteForever } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";
import styled from "styled-components";
import { LuLayoutDashboard, LuCalendarCheck2 } from "react-icons/lu";
import { BiKey, BiSolidMessageRoundedDetail } from "react-icons/bi";
import { FaRegUser, FaPhone } from "react-icons/fa6";
import { FaRegCheckCircle, FaEdit } from "react-icons/fa";
import { HiOutlinePuzzle, HiOutlineMenuAlt2 } from "react-icons/hi";
import { SlLogin } from "react-icons/sl";


const styleIconsColor1 = `
    color: #799283; 
`;

const styleIconsColor2 = `
    color: #135846;
`;

const styleIconsSize = `
    width: 1.5em;
    height: 1.5em;
    cursor: pointer;
`;

export const StyledEditIcon = styled(FaEdit)`
    ${styleIconsSize}
    ${styleIconsColor2}
    padding: 0.2em;
    border-radius: 0.2em;

    &:hover {
      background-color: #135846;
      fill:#fff;
    }
    `;

export const StyledDeleteIcon = styled(MdDeleteForever)`
    ${styleIconsSize}
    ${styleIconsColor2}
    padding: 0.2em;
    border-radius: 0.2em;


    &:hover {
      background-color: #135846;
      fill:#fff;
    }
`;

export const StyledMessageBubble = styled(BiSolidMessageRoundedDetail)`
    fill:#fff;
    background-color: #135846;
    ${styleIconsSize}
    padding: 0.5em;
`;

export const StyledPhoneIcon = styled(FaPhone)`
    ${styleIconsColor2}
    ${styleIconsSize}
    padding: 1em;
`;

export const StyledSearchIcon = styled(IoIosSearch)`
    ${styleIconsSize}
`;

export const StyledEmailIcon = styled(MdOutlineMail)`
    ${styleIconsSize};
    ${styleIconsColor2};
`;

export const StyledBelIcon = styled(FiBell)`
    ${styleIconsSize};
    ${styleIconsColor2};
`;

export const StyledLogoutIcon = styled(SlLogin)`
    ${styleIconsSize};
    ${styleIconsColor2};
    margin-right: 3rem;
`;

export const StyledDashboardIcon = styled(LuLayoutDashboard)`
  ${styleIconsColor1}
  ${styleIconsSize}
`;
export const StyledBookingIcon = styled(BiKey)`
  ${styleIconsColor1}
  ${styleIconsSize}
`;
export const StyledRoomsIcon = styled(LuCalendarCheck2)`
  ${styleIconsColor1}
  ${styleIconsSize}
`;

export const StyledContactIcon = styled(FaRegUser)`
  ${styleIconsColor1}
  ${styleIconsSize}
`;
export const StyledUsersIcon = styled(HiOutlinePuzzle)`
  ${styleIconsColor1}
  ${styleIconsSize}
`;

export const StyledMenuIcon = styled(HiOutlineMenuAlt2)`
  ${styleIconsSize}
  color: #262626;
  margin-left: 1rem;
`;

export const StyledCheckIcon = styled(FaRegCheckCircle)`
  ${styleIconsSize}
  color: #5AD07A;
`;

export const StyledCrossIcon = styled(RxCrossCircled)`
  ${styleIconsSize}
  color: #E23428 ;
`;