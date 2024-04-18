import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { userContext } from "../auth/context/user-context";
import { AppRoutes } from "../common/enums/app-routes.enum";

export function PublicRoutesWrapper() {
    const userContextValue = useContext(userContext);

    return userContextValue?.user ? <Navigate to={AppRoutes.ROOT} /> : <Outlet />;
  }
  