import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthContext } from "../context/index";

export const ProtectedRoute = () => {
  const { isAuthenticated } = useAuthContext();
  const location = useLocation();

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to={"/login"} state={{ from: location }} replace />
  );
};
