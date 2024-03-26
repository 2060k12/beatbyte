import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";

const MainLayout = () => {
  return (
    <div>
      <NavigationBar />
      <div className="w-92% ml-[8%] mr-[8%] ">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
