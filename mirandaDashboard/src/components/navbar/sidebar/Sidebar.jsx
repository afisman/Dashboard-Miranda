import React from 'react';

import SidebarButton from './SidebarButton';
import Logo from './Logo';
import { StyledBookingIcon, StyledContactIcon, StyledDashboardIcon, StyledRoomsIcon, StyledUsersIcon } from '../../reusable/StyledIcons';
import { SidebarBody, SidebarWrapper, UnorderList } from './SidebarStyles';
import UserCard from './UserCard';

const makeButtons = [
    {
        to: '/dashboard',
        icon: <StyledDashboardIcon />,
        title: 'Dashboard'
    },
    {
        to: '/rooms',
        icon: <StyledRoomsIcon />,
        title: 'Room',
    },
    {
        to: '/bookings',
        icon: <StyledBookingIcon />,
        title: 'Bookings',
    },
    {
        to: '/users',
        icon: <StyledContactIcon />,
        title: 'Guest'
    },
    {
        to: '/profile',
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
                    <UserCard />
                </SidebarBody>
            </SidebarWrapper>
        </div>
    )
}

export default Sidebar