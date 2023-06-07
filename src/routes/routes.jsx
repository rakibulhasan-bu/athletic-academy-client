import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Instructors from "../pages/Instructors";
import Classes from "../pages/Classes";
import DashboardLayout from "../layout/DashboardLayout";
import DashboardHome from "../pages/dashboard/DashboardHome";
import SelectedClasses from "../pages/dashboard/SelectedClasses";
import EnrolledClasses from "../pages/dashboard/EnrolledClasses";
import Payment from "../pages/dashboard/Payment";
import ManageUsers from "../pages/dashboard/ManageUsers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/",
        element: <Register />,
      },
      {
        path: "/",
        element: <Instructors />,
      },
      {
        path: "/",
        element: <Classes />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome />,
      },
      {
        path: "/dashboard/SelectedClasses",
        element: <SelectedClasses />,
      },
      {
        path: "/dashboard/enrolledClasses",
        element: <EnrolledClasses />,
      },
      {
        path: "/dashboard/payment",
        element: <Payment />,
      },
      {
        path: "/dashboard/manageUsers",
        element: <ManageUsers />,
      },
    ],
  },
]);
