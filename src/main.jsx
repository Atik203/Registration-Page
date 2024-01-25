import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./Root/Root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./Pages/SignIn/SignIn";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Home from "./Pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/sign-in",
        element: <SignIn></SignIn>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
