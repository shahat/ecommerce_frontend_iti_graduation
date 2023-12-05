import React, { useContext } from "react";
import { authContext } from "../../contexts/authContext";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { isLogin } = useContext(authContext);

  if (!isLogin) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
}

export default ProtectedRoute;
