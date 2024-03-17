import React from 'react';
import Sidebar from './sidebar/Sidebar';
import { StyledNavbarWrapper, StyledNavbarTitle } from './StyledNavbar';
import { StyledBelIcon, StyledEmailIcon, StyledMenuIcon, StyledLogoutIcon } from '../reusable/StyledIcons';
import { useAuth } from '../../context/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';





const Navbar = ({ sidebarOpen, setSidebarOpen }) => {
    const { state, dispatch } = useAuth()

    const navigate = useNavigate();

    const location = useLocation();

    let title;


    const handleClick = () => {
        sidebarOpen === 'true' ? setSidebarOpen('false') : setSidebarOpen('true');

    }



    const checkPath = () => {

        return location.pathname.startsWith();
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


    const handleLogout = async (e) => {
        e.preventDefault();

        try {
            await auth.logout();
            navigate('/login');
        } catch (error) {
            return alert(`Error while trying ot sign out, ${error}`);
        }
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
                        onClick={() => {
                            handleClick()
                        }}>
                    </StyledMenuIcon>
                    <StyledNavbarTitle>{title}</StyledNavbarTitle>
                </div>
                <div >
                    <StyledEmailIcon></StyledEmailIcon>
                    <StyledBelIcon></StyledBelIcon>
                    <StyledLogoutIcon /*onClick={(e) => handleLogout(e)}*/ onClick={() => dispatch({ type: 'logout' })}></StyledLogoutIcon>
                </div>
            </StyledNavbarWrapper>
        </div>
    )
}

export default Navbar