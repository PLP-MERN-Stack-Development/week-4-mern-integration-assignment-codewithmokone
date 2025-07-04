import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Navbar = () => {
    const { token, logout } = useContext(AuthContext);
    
    return (
        <header className="w-full h-14 flex items-center justify-center bg-white border-b-1"> 
            <div className="w-8/12 sm:w-11/12 flex justify-between">
                <span className="font-medium">Logo</span>
                <nav className="flex gap-8">
                    <NavLink className={({ isActive }) => isActive ? "text-blue-500 font-medium" : "font-medium"} to={'/'}>Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "text-blue-500 font-medium" : "font-medium"} to={'blogs'}>Blogs</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "text-blue-500 font-medium" : "font-medium"} to={'about'}>About</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "text-blue-500 font-medium" : "font-medium"} to={'contactus'}>Contact Us</NavLink>
                    {token ? ( <button onClick={logout}>Sign Out</button> ) : ( <NavLink className="font-medium" to={'login'}>Sign in</NavLink> )}
                </nav>
            </div>
        </header>
    )
}

export default Navbar;