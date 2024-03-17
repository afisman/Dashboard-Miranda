import React from 'react';
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from './context/AuthContext';


const PrivateRoute = ({ children }) => {
    let location = useLocation()
    const { state } = useAuth();

    if (state.isAuthenticated !== true) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }

    return children
}

export default PrivateRoute