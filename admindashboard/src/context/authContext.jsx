import { children, createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState('')
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [role, setRole] = useState(localStorage.getItem('role'));

    const navigate = useNavigate();
    
    useEffect(() => {
        if (token, role) {
        axios.defaults.headers['Authorization'] = `Bearer ${token}, ${role}`;
        axios.get('http://localhost:4000/api/auth/profile')
            .then(response => setUser(response.data.user))
            .catch(err => console.log(err));
        }
    }, [token, role]);

    const login = (data) => {
        localStorage.setItem('token', data.token);
        localStorage.setItem('role', data.user.role);
        setToken(data.token);
        setUser(data.user);
        setUserId(data.user._id)
        setRole(data.user.role);
    };
    
    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        setToken(null);
        setUser(null);
        setRole(null);
        navigate('/')
        console.log("logged out");
    };
    
    return (
        <AuthContext.Provider value={{ user, userId, token, role, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
