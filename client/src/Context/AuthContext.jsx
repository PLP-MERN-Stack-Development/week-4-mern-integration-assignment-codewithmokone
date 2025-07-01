import { children, createContext, useEffect, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [role, setRole] = useState(null);
    const [error,setError] = useState('')

    useEffect(() => {
        if (token) {
            console.log(token);
            
        axios.defaults.headers['Authorization'] = `Bearer ${token}`;
        axios.get('http://localhost:4000/api/auth/profile')
            .then(response => setUser(response.data.user))
            .catch(err => console.log(err));
        }
    }, [token]);

    const login = (data) => {
        console.log(data);
        
        localStorage.setItem('token', data.token);
        setToken(data.token);
        setUser(data.user);
        setRole(data.user.role);
        setError(data.message)
    };

    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
        setUser(null);
    };

    console.log(user);
    
    return (
        <AuthContext.Provider value={{ user, token, role, error, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
