import React from 'react';
import ContactSwiper from '../../components/contactSwiper/ContactSwiper';
import KPIsCard from '../../components/KPI/KPIsCard/KPIsCard';
import { useLocalStorage } from '../../hooks/useLocalStorage';


const DashboardPage = () => {
    return (
        <>
            <KPIsCard />
            <ContactSwiper />
        </>
    )
}

export default DashboardPage