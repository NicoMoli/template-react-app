import { Navigate } from "react-router-dom"
import { APP_PATHS } from "../constants/routes"

export const PrivatesRoutes = ({ children, isPrivateRoute }) => {
  // Here, you need to implement your logic to obtain this value correctly
  const isAuthenticated = true
  if (isPrivateRoute && !isAuthenticated)
    return <Navigate to={APP_PATHS.Login} />
  else return children
}
