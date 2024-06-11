import React from "react";
import HomeNavbar from "../Components/HomeNavbar";
import { Outlet } from "react-router-dom";

const MainPage = () => {
  return (
    <>
      <HomeNavbar />
      <Outlet />
    </>
  );
};

export default MainPage;
