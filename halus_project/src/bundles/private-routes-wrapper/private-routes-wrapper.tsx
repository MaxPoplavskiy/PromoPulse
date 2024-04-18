import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { userContext } from "../auth/context/user-context";
import { AppRoutes } from "../common/enums/app-routes.enum";

export function PrivateRoutesWrapper() {
    const userContextValue = useContext(userContext);

    return userContextValue?.user ? <Outlet /> : <Navigate to={AppRoutes.ROOT} />;
  }
  