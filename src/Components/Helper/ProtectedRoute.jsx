import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';

const ProtectedRoute = ({ children }) => {
  const { login } = React.useContext(UserContext);
  if (login === true) {
    return children;
  } else if (login === false) {
    <Navigate to="/login" />;
  } else {
    <></>;
  }
};

export default ProtectedRoute;
