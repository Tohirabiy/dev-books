import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import ErrorPage from "../pages/Error";
import Home from "../pages/Home";
import Nazm from "../pages/Nazm";
import Nasr from "../pages/Nasr";
import Maqola from "../pages/Maqola";
import Forum from "../pages/Forum";
import SignIn from "./../pages/Auth/SignIn";
import SignUp from "./../pages/Auth/SignUp";
import SettingPage from "../pages/Setting";
import MyAccount from "../pages/Setting/MyAccount";
import Security from "../pages/Setting/Security";
import Setting from "../pages/Setting/Setting";
import Profile from "../pages/Profile";
import Dashboard from "../pages/Dashboard";
import BookDetails from "../pages/Details/BookDetails";
import AuthorDetails from "../pages/Details/AuthorDetails";
import Author from "../pages/Author";
import Books from "../pages/Books";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/books",
          element: <Books />,
        },
        {
          path: "author",
          element: <Author />,
        },
        {
          path: "/author/:author",
          element: <AuthorDetails />,
        },
        {
          path: "/books/:book",
          element: <BookDetails />,
        },
        {
          path: "/nasr",
          element: <Nasr />,
        },
        {
          path: "/nazm",
          element: <Nazm />,
        },
        {
          path: "/maqola",
          element: <Maqola />,
        },
        {
          path: "/forum",
          element: <Forum />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/settings",
      element: <SettingPage />,
      children: [
        {
          path: "my-account", 
          element: <MyAccount />,
        },
        {
          path: "security",  
          element: <Security />,
        },
        {
          path: "",  
          element: <Setting />,
        },
      ],
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
  ]);
   


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/books",
//         element: <Books />,
//       },
//       {
//         path: "author",
//         element: <Author />,
//       },
//       {
//         path: "/author/:author",
//         element: <AuthorDetails />,
//       },
//       {
//         path: "/books/:book",
//         element: <BookDetails />,
//       },
//       {
//         path: "/nasr",
//         element: <Nasr />,
//       },
//       {
//         path: "/nazm",
//         element: <Nazm />,
//       },
//       {
//         path: "/maqolalar",
//         element: <Maqola />,
//       },
//       {
//         path: "/forum",
//         element: <Forum />,
//       },
//       {
//         path: "/profile",
//         element: <Profile />,
//       },
//     ],
//   },
//   {
//     path: "/setting",
//     element: <SettingPage />,
//     children: [
//       {
//         path: "/my-accounts",
//         element: <MyAccounts />,
//       },
//       {
//         path: "/security",
//         element: <Security />,
//       },
//       {
//         path: "/setting",
//         element: <Setting />,
//       },
//     ],
//   },

//   {
//     path: "/dashboard",
//     element: <Dashboard />,
//   },
//   {
//     path: "/signup",
//     element: <SignUp />,
//   },
//   {
//     path: "/signin",
//     element: <SignIn />,
//   },
//   //   {
//   //     element:
//   //   }
// ]);

export default router;
