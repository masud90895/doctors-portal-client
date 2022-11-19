import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { useAdmin } from "../Hooks/UseAdmin";
import { AuthContext } from "../Pages/AuthProvider/AuthProvider";
import Navbar from "../Pages/Shared/Navbar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin, isLoading] = useAdmin(user?.email);
  if (isLoading) {
    return <h1>loading.........</h1>;
  }
  return (
    <div>
      <Navbar />
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <Link to="/dashboard">My Appointments</Link>
            </li>
            {isAdmin && (
              <li>
                <Link to="/dashboard/allusers">All Users</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
