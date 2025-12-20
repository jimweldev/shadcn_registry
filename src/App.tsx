import { createBrowserRouter, Navigate, RouterProvider } from "react-router";

const App = () => {
  const routes = [
    {
      path: "/",
      element: <Navigate to="/home" />,
    },
    {
      path: "/home",
      element: <h1>Home</h1>,
    },
    {
      path: "/about",
      element: <h1>About</h1>,
    },
  ];

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};

export default App;
