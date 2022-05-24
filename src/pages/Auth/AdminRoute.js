import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../Shared/Loading';

const AdminRoute = () => {
    const location = useLocation();
    const [admin] = useAdmin();

    if (!admin) {
        return <Navigate to='/login' state={{ from: location }} replace />
    }
    return <Outlet />;
};

export default AdminRoute;