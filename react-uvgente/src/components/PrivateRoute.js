import { Navigate, Outlet } from "react-router-dom"

var PrivateRoute = ({ children, ...rest }) => {
  let auth = { token: true }
  return auth.token ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoute
