import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar/Sidebar';
import { StyledNavbarWrapper } from './StyledNavbar';
import { StyledBelIcon, StyledEmailIcon, StyledHeartIcon, StyledMenuIcon } from '../reusable/StyledIcons';



const Navbar = ({ setSidebarOpen, sidebarOpen }) => {
    const [open, setOpen] = useState(false);
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
                <StyledHeartIcon></StyledHeartIcon>
                <StyledEmailIcon></StyledEmailIcon>
                <StyledBelIcon></StyledBelIcon>
            </StyledNavbarWrapper>
        </div>
    )
}

export default Navbar