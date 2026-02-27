import { useState } from "react";

import AuthContext from "./auth-context";

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(() => {
        return localStorage.getItem("access_token") || null;
    });


    const login = (newToken) => {
        localStorage.setItem("access_token", newToken);
        setToken(newToken)
    }

    const logout = () => {
        localStorage.removeItem("access_token");
        setToken(null)
    }

    return (
        <AuthContext.Provider value={{ token, login, logout }}>
            {children}
        </AuthContext.Provider>
        // React 19 way
        // <AuthContext value={{ token, login, logout }}>
        //     {children}
        // </AuthContext>
    )
}

export default AuthProvider;

