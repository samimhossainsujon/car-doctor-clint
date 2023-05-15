import React, { useContext } from 'react';
import { AuthContext } from './Proveiders/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivetRoutes = ({ children }) => {
    const { user, loding } = useContext(AuthContext)
    if (loding) {
        return <button className="btn btn-square loading"></button>
    }


    if (user?.email) {
        return children;
    }
    return <Navigate to='/login' replace></Navigate>;
};

export default PrivetRoutes;