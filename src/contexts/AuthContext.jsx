import { createContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import * as authService from '../services/authService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [auth, setAuth] = useState({});

    const onLoginSubmit = async (values) => {
        try {
            const result = await authService.login(values.email, values.password);

            setAuth(result);

            navigate('/');
        } catch (error) {
            console.log("There is a problem");
        }
    };

    const contextValues = {
        onLoginSubmit,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        isAuthenticated: !!auth.accessToken,
    };

    return (
        <AuthContext.Provider value={contextValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;