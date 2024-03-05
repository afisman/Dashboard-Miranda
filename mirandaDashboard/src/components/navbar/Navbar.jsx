import React, { useState } from 'react';
import Sidebar from './sidebar/Sidebar';
import { StyledNavbarWrapper } from './StyledNavbar';
import { StyledBelIcon, StyledEmailIcon, StyledMenuIcon } from '../reusable/StyledIcons';



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
                <div >
                    <StyledEmailIcon></StyledEmailIcon>
                    <StyledBelIcon></StyledBelIcon>
                </div>
            </StyledNavbarWrapper>
        </div>
    )
}

export default Navbar