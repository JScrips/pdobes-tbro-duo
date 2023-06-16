import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen flex justify-center items-center">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
