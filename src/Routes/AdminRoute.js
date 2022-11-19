import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAdmin } from '../Hooks/UseAdmin';
import { AuthContext } from '../Pages/AuthProvider/AuthProvider';
import Loader from '../Pages/Shared/Loader';

const AdminRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isLoading] = useAdmin(user?.email);
    const location = useLocation();

    if (loading || isLoading) {
        return <Loader/>
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;