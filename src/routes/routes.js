import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "../pages/dashboard/dashboard";
import { Login } from "../pages/login/login";
import { Registro } from "../pages/register/register";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: Login, // O redirige correctamente con Navigate
    },
    {
      path: "/login",
      Component: Login,
    },
    {
      path: "/registro",
      Component: Registro,
    },
    {
      path: "/dashboard",
      Component: Dashboard,
    },
  ],
  {
    basename: "/jd", // 🔥 Aquí es donde se indica que todo está bajo /jd
  }
);
