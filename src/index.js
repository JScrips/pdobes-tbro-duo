import React from "react";
import ReactDOM from "react-dom/client";
import "./styling/app-style.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout.jsx";
import ParisComponent from "./components/paris-components/diablo-html/ParisComponent";
import App from "./App";
import YmanComponent from "./components/yman-components/YmanComponent.jsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/paris",
        element: <ParisComponent />,
      },
      {
        path: "/yman",
        element: <YmanComponent />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
