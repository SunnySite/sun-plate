import Header from "./Header";
import { Outlet } from "react-router-dom";
import React, { useRef } from "react";
import Navbar from "./Navbar";
import { ArcComputer, Box, Piechart } from "../assets/Icon";

export default function Layout() {
  const childRef = useRef(null);

  const renderLayout = () => {
    const dataMenu = [
      {
        menu: "dashboard",
        display: "Dashboard",
        path: "/",
        icon: <Piechart />,
      },
      {
        menu: "master",
        display: "Master",
        icon: <ArcComputer />,
        child: [
          {
            menu: "employee",
            display: "Employee",
            path: "/employee",
          },
        ],
      },
      {
        menu: "product",
        display: "Product",
        icon: <Box />,
        child: [
          {
            menu: "category",
            display: "Category",
            path: "/category",
          },
        ],
      },
    ];
    return (
      <>
        <Header />
        <Navbar Menus={dataMenu} />

        <div className="p-4 sm:ml-64 mt-16 bg-[#f5f7fa] min-h-lvh" ref={childRef}>
          <div className="">
            <Outlet />
          </div>
        </div>
      </> 
    );
  };

  return <React.Fragment>{renderLayout()}</React.Fragment>;
}
