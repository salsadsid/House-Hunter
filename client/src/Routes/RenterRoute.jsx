import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import useRenter from '../hook/useRenter';

const RenterRoute = ({children}) => {
    const{user,loading}=useContext(AuthContext)
    const [isRenter,isRenterLoading]=useRenter(user)
    const location = useLocation()
    if(loading || isRenterLoading){
        return <p>loading</p>
    }
    if(user && isRenter){
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default RenterRoute;