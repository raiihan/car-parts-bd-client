import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../Shared/Loading';

const AdminRoute = () => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    const location = useLocation();

    if (loading || adminLoading) {
        return <Loading />
    }

    if (!admin || !user) {
        return <Navigate to='/login' state={{ from: location }} replace />
    }
    return <Outlet />;
};

export default AdminRoute;