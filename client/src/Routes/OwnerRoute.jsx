import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import useOwner from '../hook/useOwner';

const OwnerRoute = ({children}) => {
    const{user,loading}=useContext(AuthContext)
    const [isOwner,isOwnerLoading]=useOwner(user)
    const location = useLocation()
    if(loading || isOwnerLoading){
        return <p>loading</p>
    }
    if(user && isOwner){
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default OwnerRoute;