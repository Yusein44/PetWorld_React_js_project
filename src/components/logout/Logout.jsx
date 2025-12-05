import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';

export default function Logout() {
    const { onLogout } = useContext(AuthContext);
    useEffect(() => {
        onLogout();
    }, [onLogout]);

    return null;
}