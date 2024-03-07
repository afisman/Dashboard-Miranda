import React from 'react';
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    let location = useLocation()

    if (localStorage.getItem('isLoggedIn') !== 'true') {
        return <Navigate to="/" state={{ from: location }} replace />
    }

    return children
}

export default PrivateRoute