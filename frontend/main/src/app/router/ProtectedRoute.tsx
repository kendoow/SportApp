import { Navigate, Outlet } from "react-router";

const ProtectedRoute = ({ token, redirectPath = "/", children }) => {
  if (token !== null) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
