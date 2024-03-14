import React from 'react';
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children, auth }) => {
    let location = useLocation()

    if (auth !== true) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }

    return children
}

export default PrivateRoute