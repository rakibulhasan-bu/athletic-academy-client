import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
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
import AddAClass from "../pages/dashboard/AddAClass";
import MyClasses from "../pages/dashboard/MyClasses";
import ManageClasses from "../pages/dashboard/ManageClasses";
import Home from "../pages/Home/Home";

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
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/instructors",
        element: <Instructors />,
      },
      {
        path: "/classes",
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
        path: "/dashboard/addAClass",
        element: <AddAClass />,
      },
      {
        path: "/dashboard/myClass",
        element: <MyClasses />,
      },
      {
        path: "/dashboard/manageClasses",
        element: <ManageClasses />,
      },
      {
        path: "/dashboard/selectedClasses",
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
