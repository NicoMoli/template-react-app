import { lazy } from 'react';
import * as routesConstants from "../constants/routes"

const Example = lazy(() => import("../../pages/Example/Example"))

export const privateRoutes = [
  {
    name: routesConstants.ROUTE_EXAMPLE,
    path: routesConstants.APP_PATHS.Example,
    component: Example,
    exact: true,
    auth: true,
  },
]
