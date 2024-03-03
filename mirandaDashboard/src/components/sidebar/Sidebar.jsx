import React from 'react';


import styled from 'styled-components';
import SidebarButton from './SidebarButton';
import Logo from './Logo';
import { StyledBookingIcon, StyledContactIcon, StyledDashboardIcon, StyledRoomsIcon, StyledUsersIcon } from '../reusable/StyledIcons';

const SidebarWrapper = styled.div`
position: fixed;
top:0;
left:0;
width:345px;
height: 100vh;
display:block;
z-index:2;
transition: transform 0.3s ease-in-out;
`;

const SidebarBody = styled.div`
height: 100vh;
overflow: hidden;
`;

const UnorderList = styled.ul`
    position: relative;
    list-style: none;
    padding: 0;
    display: block;
    transition: all 0.5s ease;
`;

const makeButtons = [
    {
        to: '/dashboard/home',
        icon: <StyledDashboardIcon />,
        title: 'Dashboard'
    },
    {
        to: '/dashboard/room',
        icon: <StyledRoomsIcon />,
        title: 'Room',
    },
    {
        to: '/dashboard/bookings',
        icon: <StyledBookingIcon />,
        title: 'Bookings',
    },
    {
        to: '/dashboard/guest',
        icon: <StyledContactIcon />,
        title: 'Guest'
    },
    {
        to: '/dashboard/concierge',
        icon: <StyledUsersIcon />,
        title: 'Concierge'
    },


]

const Sidebar = () => {
    return (
        <div>
            <SidebarWrapper>
                <SidebarBody>
                    <Logo />
                    <UnorderList>
                        {makeButtons.map((btn, i) => (
                            <SidebarButton to={btn.to} icon={btn.icon} title={btn.title} key={i} />
                        ))}
                    </UnorderList>
                </SidebarBody>
            </SidebarWrapper>
        </div>
    )
}

export default Sidebar