import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="w-full h-14 flex items-center justify-center bg-white border-b-2"> 
            <div className="w-4/5 flex justify-between">
                <span>Logo</span>
                <nav className="flex gap-8">
                    <NavLink className="font-medium">Home</NavLink>
                    <NavLink className="font-medium">Blogs</NavLink>
                    <NavLink className="font-medium">About</NavLink>
                    <NavLink className="font-medium">Contact Us</NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Navbar;