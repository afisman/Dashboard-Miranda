import React, { useState } from 'react';
import Sidebar from './sidebar/Sidebar';
import { StyledNavbarWrapper } from './StyledNavbar';
import { StyledBelIcon, StyledEmailIcon, StyledMenuIcon, StyledLogoutIcon } from '../reusable/StyledIcons';
import { useAuth } from '../../context/auth.context';
import { useNavigate, useLocation } from 'react-router-dom';



const Navbar = ({ setSidebarOpen, sidebarOpen }) => {
    const [open, setOpen] = useState(false);
    const auth = useAuth();
    const navigate = useNavigate();



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
            <StyledNavbarWrapper isopen={sidebarOpen.toString()}>
                <StyledMenuIcon
                    onClick={() => {
                        setOpen(!open)
                        setSidebarOpen(!sidebarOpen)
                    }}>
                </StyledMenuIcon>
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