import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import { StyledLayout } from '../../components/layout/StyledLayout';



const Layout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    return (
        <>
            <Navbar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
            <StyledLayout $sidebaropen={sidebarOpen.toString()}>
                <Outlet />
            </StyledLayout>
        </>
    )
}

export default Layout