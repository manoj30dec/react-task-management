import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../context/useAuth"

export default function PublicRoute({ children }) {
    const { token } = useAuth();
    const location = useLocation();
    if (token) {
        return (
            <Navigate to={location.state?.from.pathname || '/dashboard'} replace />
        )
    }
    return children
}