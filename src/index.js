import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./css/index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Events from "./features/pages/Events";
import Details from "./features/pages/Details";
import Error from "./features/pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Events />,
      },
      {
        path: "/events/:id",
        element: <Details />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
