import { getAuth } from 'firebase/auth';
import { Navigate, useLocation } from 'react-router-dom';
import app from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import React from 'react';

const auth = getAuth(app);

const RequireAuth = ({children}) => {
    let [user] = useAuthState(auth)
    let location = useLocation();

    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireAuth;