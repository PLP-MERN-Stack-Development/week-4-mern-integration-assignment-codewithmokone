import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const PrivateRoute = () => {
    const { role } = useContext(AuthContext);
    
    console.log(role);
    
    if (data.user.role === 'admin') { 
        return <Navigate to='dashboard' /> 
    }; 
    const isAuthenticated = !!localStorage.getItem('token');
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoute;