import React from "react";
import { useGlobalContext } from "../context";
import { Navigate, Outlet } from "react-router-dom";
const AdminRouter = () => {
  const { isAdmin } = useGlobalContext();
  return isAdmin ? <Outlet /> : <Navigate to={"/"} />;
};

export default AdminRouter;
