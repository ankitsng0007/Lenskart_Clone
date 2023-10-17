import React, { createContext, useState } from "react";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false);
    const [AuthData, setAuthData ] = useState();

    return (
        <AuthContext.Provider value={{ isAuth, setIsAuth, AuthData, setAuthData }} >
            {children}
        </AuthContext.Provider>
    )
}