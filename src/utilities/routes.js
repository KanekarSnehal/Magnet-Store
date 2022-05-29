import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthContext } from "../context/index";

export const ProtectedRoute = () => {
  const {
    authState: { authToken },
  } = useAuthContext();
  const location = useLocation();

  return authToken ? (
    <Outlet />
  ) : (
    <Navigate to={"/login"} state={{ from: location }} replace />
  );
};
