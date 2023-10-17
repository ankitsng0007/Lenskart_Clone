import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';
import {Navigate} from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const {isAuth} = useContext(AuthContext);

    if( !isAuth ){
        alert("Please Login First");
        return <Navigate to="/" />
    }
  return 
    children;
}

export default PrivateRoute;
