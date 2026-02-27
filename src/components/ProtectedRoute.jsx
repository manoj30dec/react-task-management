import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../context/useAuth"

// export default function ProtectedRoute({ children }) {
export default function ProtectedRoute() {
    const { token } = useAuth(); //token coming from AuthContext provider
    const location = useLocation()
    if (!token) {
        // return <Navigate to={'/'} />
        return <Navigate to={'/'} state={{ from: location }} replace />
    }
    // return children
    return <Outlet />
}