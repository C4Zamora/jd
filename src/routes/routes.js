import { Dashboard } from "../pages/dashboard/dashboard"; 
import { Login } from "../pages/login/login";
import { Registro } from "../pages/register/register";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: () => {
      window.location.replace("/jd/login");
      return null;
    },
  },
  {
    path: "/jd/login",
    Component: Login,
  },
  {
    path: "jd/registro",
    Component: Registro,
  },
  {
    path: "jd/dashboard",
    Component: Dashboard,
  },
   {
    basename: "/jd/login", // Cambia esto según el nombre de tu repositorio
  }
]);

