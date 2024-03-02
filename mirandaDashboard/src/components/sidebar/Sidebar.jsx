import React from 'react'

import styled from 'styled-components';
import SidebarButton from './SidebarButton';
import Logo from './Logo';

const SidebarWrapper = styled.div`
position: fixed;
top:0;
left:0;
width:250px;
height: 100vh;
display:block;
z-index:2;
transition: transform 0.3s ease-in-out;
`;

const SidebarBody = styled.div`
background: linear-gradient(0deg, #3358f4, #1d8cf8);
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
        icon: <i className='fa-solid fa-house'></i>,
        title: 'Dashboard'
    },
    {
        to: '/dashboard/profile',
        icon: <i className='fa-solid fa-id-card'></i>,
        title: 'Profile',
        subBtn: ["Passwords", "Mail", "Accounts"]
    },
    {
        to: '/dashboard/features',
        icon: <i className='fa-solid fa-bag-shopping'></i>,
        title: 'Features',
        subBtn: ["Pages", "Elements", "Portfolio"]
    },
    {
        to: '/dashboard/revenue',
        icon: <i className='fa-solid fa-poll-vertical'></i>,
        title: 'Dashboard'
    },
    {
        to: '/dashboard/analytics',
        icon: <i className='fa-solid fa-chart-pie'></i>,
        title: 'Analytics'
    },
    {
        to: '/dashboard/calendar',
        icon: <i className='fa-solid fa-calendar-days'></i>,
        title: 'Calendar'
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