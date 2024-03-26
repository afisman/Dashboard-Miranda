import React from 'react';

import SidebarButton from './SidebarButton';
import Logo from './Logo';
import { StyledBookingIcon, StyledContactIcon, StyledDashboardIcon, StyledRoomsIcon, StyledUsersIcon } from '../../reusable/StyledIcons';
import { SidebarBody, SidebarWrapper, UnorderList } from './SidebarStyles';
import UserCard from './UserCard';

interface makeButtonsInterface {
    to: string
    icon: JSX.Element
    title: string
}

const makeButtons: makeButtonsInterface[] = [
    {
        to: '/dashboard',
        icon: <StyledDashboardIcon />,
        title: 'Dashboard'
    },
    {
        to: '/rooms',
        icon: <StyledRoomsIcon />,
        title: 'Rooms',
    },
    {
        to: '/bookings',
        icon: <StyledBookingIcon />,
        title: 'Bookings',
    },
    {
        to: '/contact',
        icon: <StyledContactIcon />,
        title: 'Contact'
    },
    {
        to: '/users',
        icon: <StyledUsersIcon />,
        title: 'Concierge'
    },


]

const Sidebar: React.FC = () => {
    return (
        <div>
            <SidebarWrapper>
                <SidebarBody>
                    <Logo />
                    <UnorderList>
                        {makeButtons.map((btn, i) => (
                            <SidebarButton to={btn.to} icon={btn.icon} title={btn.title} key={i} id={`nav_${btn.title}`} />
                        ))}
                    </UnorderList>
                    <UserCard />
                </SidebarBody>
            </SidebarWrapper>
        </div>
    )
}

export default Sidebar