import React, { useContext } from 'react';
import { AuthContext } from './Proveiders/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoutes = ({ children }) => {
    const { user, loding } = useContext(AuthContext)
    const location = useLocation();
    if (loding) {
        return <button className="btn btn-square loading"></button>
    }


    if (user?.email) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
};

export default PrivetRoutes;