import { children, createContext, useEffect, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState(localStorage.getItem('userId'))
    const [token, setToken] = useState(localStorage.getItem('token'));

    useEffect(() => {
        if (token, userId) {
        axios.defaults.headers['Authorization'] = `Bearer ${token}, ${userId}`;
        axios.get('http://localhost:4000/api/auth/profile')
            .then(response => setUser(response.data.user))
            .catch(err => console.log(err));
        }
    }, [token, userId]);

    const login = (data) => {
        localStorage.setItem('token', data.token);
        localStorage.setItem('userId', data.user._id);
        setToken(data.token);
        setUser(data.user);
        setUserId(data.user._id)
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        setToken(null);
        setUser(null);
        setUserId(null);
    };
    
    return (
        <AuthContext.Provider value={{ user, userId, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
