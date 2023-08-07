import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({ isAuth }) => {
  PrivateRoute.propTypes = {
    isAuth: PropTypes.func,
  };
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
