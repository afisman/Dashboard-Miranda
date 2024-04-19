import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import { StyledLayout } from '../../components/layout/StyledLayout';
import useStoreSidebar from '../../hooks/useStoreSidebar';



const Layout = () => {
    const [sidebarOpen, setSidebarOpen] = useStoreSidebar('sidebarOpen', 'true');


    return (
        <>
            <Navbar sidebarOpen={sidebarOpen as string} setSidebarOpen={setSidebarOpen as React.Dispatch<React.SetStateAction<string>>} />
            <StyledLayout $sidebaropen={sidebarOpen as string}>
                <Outlet />
            </StyledLayout>
        </>
    )
}

export default Layout