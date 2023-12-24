import { Navigate, Outlet } from "react-router";

const ProtectedRoute = ({ accessToken, redirectPath = "/", children }) => {
  if (accessToken !== null) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
