import React, {createContext, useState } from "react";

export const CurrentAccount = createContext();
const AuthContext = ({ children }) => {
    const [current, setCurrent] = useState();
    return (
        <CurrentAccount.Provider value={{ current, setCurrent }}>
            {children}
        </CurrentAccount.Provider >);
}

export default AuthContext;