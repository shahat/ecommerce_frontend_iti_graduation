import React, { useContext } from 'react'
import { authContext } from '../../contexts/authContext';
import { Navigate } from 'react-router-dom';

function protectedRoute({children}) {
  const {isLogin }= useContext(authContext);

  if(isLogin){
    return children
  }else{
    <Navigate to="/login"/>
  }
}

export default protectedRoute;
