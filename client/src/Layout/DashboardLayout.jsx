import React from "react";
import { Link, Outlet } from "react-router-dom";
import Nav from "../Pages/Shared/Nav";

const DashboardLayout = () => {
  return (
    <div>
      <Nav></Nav>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content m-4 ">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side top-[71px]">
          <label htmlFor="my-drawer-2" className=""></label>
          <ul className="menu p-4 w-80 h-full text-gray-900 bg-gradient-to-r from-rose-100 to-teal-100 rounded-xl overflow-hidden mt-3 mr-3 font-medium">
            <li><Link to="owned" className="bg-gray-300">Owned Residences</Link></li>
            <li>dsa</li>
            <li>dsa</li>
            <li>dsa</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
