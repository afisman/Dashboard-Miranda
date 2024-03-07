import React, { useState } from 'react';
import Sidebar from './sidebar/Sidebar';
import { StyledNavbarWrapper, StyledNavbarTitle } from './StyledNavbar';
import { StyledBelIcon, StyledEmailIcon, StyledMenuIcon, StyledLogoutIcon } from '../reusable/StyledIcons';
import { useAuth } from '../../context/auth.context';
import { useNavigate, useLocation } from 'react-router-dom';



const Navbar = ({ setSidebarOpen, sidebarOpen }) => {
    const [open, setOpen] = useState(false);
    const auth = useAuth();
    const navigate = useNavigate();

    const location = useLocation();

    let title;


    const checkPath = () => {

        return location.pathname.startsWith();
    }

    console.log(location.pathname.startsWith('/rooms'))

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
            navigate('/', { replace: true });
        } catch (error) {
            return alert(`Error while trying ot sign in, ${error}`);
        }
    }

    return (
        <div>
            {sidebarOpen === true ? (
                <Sidebar />
            ) : (
                ''
            )}
            <StyledNavbarWrapper $isopen={sidebarOpen.toString()}>
                <div>
                    <StyledMenuIcon
                        onClick={() => {
                            setOpen(!open)
                            setSidebarOpen(!sidebarOpen)
                        }}>
                    </StyledMenuIcon>
                    <StyledNavbarTitle>{title}</StyledNavbarTitle>
                </div>
                <div >
                    <StyledEmailIcon></StyledEmailIcon>
                    <StyledBelIcon></StyledBelIcon>
                    <StyledLogoutIcon onClick={(e) => handleLogout(e)}></StyledLogoutIcon>
                </div>
            </StyledNavbarWrapper>
        </div>
    )
}

export default Navbar