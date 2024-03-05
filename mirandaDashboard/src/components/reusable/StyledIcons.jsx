import { IoIosSearch, IoMdHeartEmpty, IoMdMore } from "react-icons/io";
import { FiBell } from "react-icons/fi";
import { MdOutlineMail, MdOutlineLocalPhone } from "react-icons/md";
import styled from "styled-components";
import { LuLayoutDashboard, LuCalendarCheck2 } from "react-icons/lu";
import { BiKey } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa6";
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