import React from 'react';
import ContactSwiper from '../../components/contactSwiper/ContactSwiper';
import KPIsCard from '../../components/KPI/KPIsCard/KPIsCard';
import { useLocalStorage } from '../../hooks/useLocalStorage';


const DashboardPage = () => {
    const user: any = useLocalStorage({ key: 'user', action: 'get' });
    console.log(JSON.parse(user).token)
    return (
        <>
            <KPIsCard />
            <ContactSwiper />
        </>
    )
}

export default DashboardPage