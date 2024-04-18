import React, { MouseEvent } from 'react';
import Sidebar from './sidebar/Sidebar';
import { StyledNavbarWrapper, StyledNavbarTitle } from './StyledNavbar';
import { StyledBelIcon, StyledEmailIcon, StyledMenuIcon, StyledLogoutIcon } from '../reusable/StyledIcons';
import { useAuth } from '../../context/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { NavbarProps } from '../../interfaces/props/propsInterface';





const Navbar: React.FC<NavbarProps> = ({ sidebarOpen, setSidebarOpen }) => {
    const { dispatch } = useAuth()

    const navigate = useNavigate();

    const location: any = useLocation();

    let title: string;


    const handleClick = (): void => {
        sidebarOpen === 'true' ? setSidebarOpen('false') : setSidebarOpen('true');
    }


    switch (true) {
        case location.pathname.startsWith('/rooms'):
            title = 'Room List';
            break;
        case location.pathname.startsWith('/users'):
            title = 'Concierge List';
            break;
        case location.pathname.startsWith('/bookings/'):
            title = 'Guest Details';
            break;
        case location.pathname.startsWith('/bookings'):
            title = 'Guest List';
            break;
        case location.pathname.startsWith('/profile'):
            title = 'Reviews';
            break;
        default:
            title = 'Dashboard';
    }


    const handleLogout = (e: MouseEvent) => {
        e.preventDefault();
        dispatch({ type: 'logout', payload: { auth: false, user: '', email: '', token: '' } });
        navigate('/login');
    }

    return (
        <div>
            {sidebarOpen === 'true' ? (
                <Sidebar />
            ) : (
                ''
            )}
            <StyledNavbarWrapper $isopen={sidebarOpen}>
                <div>
                    <StyledMenuIcon
                        id='sidebar_button'
                        onClick={() => {
                            handleClick()
                        }}>
                    </StyledMenuIcon>
                    <StyledNavbarTitle id='title'>{title}</StyledNavbarTitle>
                </div>
                <div >
                    <StyledEmailIcon></StyledEmailIcon>
                    <StyledBelIcon></StyledBelIcon>
                    <StyledLogoutIcon id='log_out' onClick={(e: MouseEvent) => handleLogout(e)}></StyledLogoutIcon>
                </div>
            </StyledNavbarWrapper>
        </div>
    )
}

export default Navbar