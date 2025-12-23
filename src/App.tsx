import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import HomeLayout from "./02_layouts/home-layout";
import HomePage from "./01_pages/home-page";

const App = () => {
  const routes = [
    {
      element: <HomeLayout />,
      children: [
        {
          path: "/",
          element: <h1>Introduction</h1>,
        },
        {
          path: "/installation",
          element: <HomePage />,
        },
        {
          path: "/button",
          element: <h1>Button</h1>,
        },
        {
          path: "/dialog",
          element: <h1>Dialog</h1>,
        },
        {
          path: "/form",
          element: <h1>Form</h1>,
        },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/" replace />,
    },
  ];

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};

export default App;
