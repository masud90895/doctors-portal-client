import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Appointment from "../Pages/Appointmnet/Appointmnet";
import ErrorPage from "../Pages/Error/ErrorPage";
import Login from "../Pages/Athentication/Login";
import Register from "../Pages/Athentication/Register";
import Dashboard from "../Pages/Dashboard/Dashboard";
import PriveteRoute from "./PriveteRoute";
import DashboardLayout from "../Layout/DashboardLayout";
import AllUsers from "../Pages/Dashboard/AllUsers";
import AdminRoute from "./AdminRoute";
import AddADoctor from "../Pages/Dashboard/AddADoctor";
import ManageDocctors from "../Pages/Dashboard/ManageDocctors";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "appointment",
        element: <Appointment />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PriveteRoute>
        <DashboardLayout />
      </PriveteRoute>
    ),
    children: [
      { path: "", element: <Dashboard /> },
      {
        path: "/dashboard/allusers",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/adddoctors",
        element: (
          <AdminRoute>
            <AddADoctor />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/managedoctors",
        element: (
          <AdminRoute>
            <ManageDocctors />
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
