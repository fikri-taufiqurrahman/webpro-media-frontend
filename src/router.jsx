import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MENUS } from "@/constants/menus";
import LoginPage from "@/pages/auth/login";
import RegisterPage from "@/pages/auth/register";
import HomePage from "@/pages/home";
import ProfilePage from "@/pages/profile";
import NotFound from "./pages/not-found";

const router = createBrowserRouter([
  // Auth
  {
    path: MENUS.LOGIN,
    element: <LoginPage />,
  },
  {
    path: MENUS.REGISTER,
    element: <RegisterPage />,
  },
  // Home
  {
    path: MENUS.HOME,
    element: <HomePage />,
  },
  // Profile
  {
    path: `${MENUS.PROFILE}/:id`,
    element: <ProfilePage />,
  },
  // 404
  {
    path: "*",
    element: <NotFound />,
  },
]);

const AppRoute = () => {
  return <RouterProvider router={router} />;
};

export default AppRoute;
