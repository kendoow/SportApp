import { Navigate, Outlet } from "react-router";

const ProtectedRoute = ({ isAuth, redirectPath = "/", children }) => {
  if (isAuth !== null) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
