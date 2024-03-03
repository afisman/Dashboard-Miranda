import { IoIosSearch, IoMdHeartEmpty, IoMdMore } from "react-icons/io";
import { FiAlignLeft, FiBell } from "react-icons/fi";
import { MdOutlineMail, MdOutlineLocalPhone } from "react-icons/md";
import styled from "styled-components";
import { LuLayoutDashboard, LuCalendarCheck2 } from "react-icons/lu";
import { TfiKey } from "react-icons/tfi";
import { FaRegUser } from "react-icons/fa6";
import { HiOutlinePuzzle } from "react-icons/hi";
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
`;

export const StyledSearchIcon = styled(IoIosSearch)`
    ${styleIconsSize}
`;

export const StyledHeartIcon = styled(IoMdHeartEmpty)`
    ${styleIconsSize};
    ${styleIconsColor2};
    margin-top: 3rem;
    margin-left: auto;
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
export const StyledBookingIcon = styled(TfiKey)`
  ${styleIconsColor1}
  ${styleIconsSize}
`;
export const StyledRoomsIcon = styled(LuCalendarCheck2)`
  ${styleIconsColor1}
  ${styleIconsSize}

       &.active {
    color: #E23428;
  }
`;

export const StyledContactIcon = styled(FaRegUser)`
  ${styleIconsColor1}
  ${styleIconsSize}

    &.active {
    color: #E23428;
  }
`;
export const StyledUsersIcon = styled(HiOutlinePuzzle)`
  ${styleIconsColor1}
  ${styleIconsSize}

    &.active {
    color: #E23428;
  }
`;

export const StyledPhone = styled(MdOutlineLocalPhone)`
  ${styleIconsSize}
  margin-right: 1em
`;