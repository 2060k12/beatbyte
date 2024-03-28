import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div>
      <NavigationBar />
      <div className="container mx-auto ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
