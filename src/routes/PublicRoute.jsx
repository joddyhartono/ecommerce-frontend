import { isTokenExpired } from "@/lib/utils";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const PublicRoute = () => {
  const token = useSelector((state) => state.auth.token);

  if (token && !isTokenExpired(token)) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default PublicRoute;
