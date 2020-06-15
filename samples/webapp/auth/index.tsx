import React from 'react';
import useAuth from 'auth/useAuth';

const AuthContext = React.createContext({});

export const AuthProvider = ({ children }: any) => {
    useAuth();

    return (
        <AuthContext.Provider value={{}}>
                {children}
        </AuthContext.Provider>
    );
};
