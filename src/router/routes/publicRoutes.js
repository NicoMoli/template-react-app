import { lazy } from 'react';
import * as routesConstants from "../constants/routes"

const Login = lazy(() => import("../../pages/Login/Login"));
const Faqs = lazy(() => import("../../pages/Faqs/Faqs"));

export const publicRoutes = [
  {
    name: routesConstants.ROUTE_LOGIN,
    path: routesConstants.APP_PATHS.Login,
    component: Login,
  },
  {
    name: routesConstants.ROUTE_FAQS,
    path: routesConstants.APP_PATHS.Faqs,
    component: Faqs,
  },
]
