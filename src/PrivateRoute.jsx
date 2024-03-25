import React from 'react';
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from './context/AuthContext.tsx';


const PrivateRoute = ({ children }) => {
    const { state } = useAuth();

    if (state.auth !== true) {
        return <Navigate to="/login" replace />
    }

    return children
}

export default PrivateRoute