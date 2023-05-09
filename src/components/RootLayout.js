import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import React from "react";

const RootLayout = () => {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
