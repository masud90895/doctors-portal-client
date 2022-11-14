import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Appointment from "../Pages/Appointmnet/Appointmnet"
import ErrorPage from "../Pages/Error/ErrorPage";
import Login from "../Pages/Athentication/Login";
import Register from "../Pages/Athentication/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage/>,
    children: [
        {
             path: "/",
             element: <Home />
        },
        {
             path: "home",
             element: <Home />
        },
        {
          path: "appointment",
          element: <Appointment />
        },
        {
          path:"login",
          element: <Login />
        },
        {
          path:"register",
          element: <Register/>
        },
   ],
  },
]);

export default router;
