import { Box } from "@chakra-ui/react";
import React from "react";
import { BrowserRouter, Outlet } from "react-router-dom";
import DashBoardNav from "../Components/DashBoardNav";

const DashBoard = () => {
  return (
    <>
      <DashBoardNav />
      <Outlet />
    </>
  );
};

export default DashBoard;
