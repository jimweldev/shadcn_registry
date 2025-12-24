import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import HomeLayout from "./02_layouts/home-layout";
import HomePage from "./01_pages/getting-started/home-page";
import IntroductionPage from "./01_pages/getting-started/introduction-page";
import ButtonPage from "./01_pages/components/button/button-page";
import DialogPage from "./01_pages/components/dialog/dialog-page";

const App = () => {
  const routes = [
    {
      element: <HomeLayout />,
      children: [
        {
          path: "/",
          element: <IntroductionPage />,
        },
        {
          path: "/installation",
          element: <HomePage />,
        },
        {
          path: "/button",
          element: <ButtonPage />,
        },
        {
          path: "/dialog",
          element: <DialogPage />,
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
