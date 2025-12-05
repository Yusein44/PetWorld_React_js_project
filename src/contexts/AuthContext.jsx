import { createContext } from "react";
import { useNavigate } from 'react-router-dom';

import * as authService from '../services/authService';
import usePersistedState from "../hooks/usePersistedState";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [auth, setAuth] = usePersistedState('auth', {});

    const onLoginSubmit = async (values) => {
        try {
            const result = await authService.login(values.email, values.password);
            
            setAuth(result);
            navigate('/');
        } catch (error) {
            console.log("Login error");
            alert("Грешен имейл или парола!");
        }
    };

    const onRegisterSubmit = async (values) => {
        const { confirmPassword, ...registerData } = values;
        if (confirmPassword !== registerData.password) {
            alert("Паролите не съвпадат!");
            return;
        }

        try {
            const result = await authService.register(registerData.email, registerData.password);
            
            setAuth(result);
            navigate('/');
        } catch (error) {
            console.log("Register error");
            alert("Грешка при регистрация!");
        }
    };

    const onLogout = async () => {
        try {
            await authService.logout();
            setAuth({});
            navigate('/');
        } catch (error) {
            console.log("Logout error");
            setAuth({}); 
            navigate('/');
        }
    };

    const contextValues = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
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