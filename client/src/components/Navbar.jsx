import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Navbar = () => {
    const { role, token, logout } = useContext(AuthContext);
    
    return (
        <header className="w-full h-14 flex items-center justify-center bg-white border-b-1"> 
            <div className="w-8/12 sm:w-11/12 flex justify-between">
                <span>Logo</span>
                <nav className="flex gap-8">
                    <NavLink className="font-medium" to={'/'}>Home</NavLink>
                    <NavLink className="font-medium" to={'blogs'}>Blogs</NavLink>
                    {/* <NavLink className="font-medium">About</NavLink>
                    <NavLink className="font-medium">Contact Us</NavLink> */}
                    {role === 'admin' ? (
                        <>
                            <NavLink className="font-medium" to={'createpost'}>Create Post</NavLink>
                            <NavLink className="font-medium" to={'createcategory'}>Create Category</NavLink>
                        </>
                        ) : (
                        <>
                            <NavLink className="font-medium">About</NavLink>
                            <NavLink className="font-medium">Contact Us</NavLink>
                        </>
                    )}
                    {token ? ( <button onClick={logout}>Sign Out</button> ) : ( <NavLink className="font-medium" to={'login'}>Sign in</NavLink> )}
                </nav>
            </div>
        </header>
    )
}

export default Navbar;