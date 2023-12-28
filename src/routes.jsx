import {
  createBrowserRouter
} from "react-router-dom";
import Layout from "./containers/Layout";
import Home from "./pages/Home/index";
import Employee from "./pages/Employee";
import App from "./App";

export const Router = () => {
  return createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
          lazy : () => import('./pages/Home')
        },
        {
          path: "/employee",
          element: <Employee />,
          lazy: () => import('./pages/Employee')
        },
        {
          path: "*",
          element: <>Not found</>,
        },
      ],
    },
  ]);
};
