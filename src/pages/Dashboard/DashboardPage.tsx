import React from 'react';
import ContactSwiper from '../../components/contactSwiper/ContactSwiper.jsx';
import KPIsCard from '../../components/KPI/KPIsCard/KPIsCard';

const DashboardPage: React.FC = () => {
    return (
        <>
            <KPIsCard />
            <ContactSwiper />
        </>
    )
}

export default DashboardPage