import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="w-full h-14 flex items-center justify-center bg-white border-b-1"> 
            <div className="w-8/12 sm:w-11/12 flex justify-between">
                <span>Logo</span>
                <nav className="flex gap-8">
                    <NavLink className="font-medium" to={'/'}>Home</NavLink>
                    <NavLink className="font-medium" to={'blogs'}>Blogs</NavLink>
                    <NavLink className="font-medium">About</NavLink>
                    <NavLink className="font-medium">Contact Us</NavLink>
                    <NavLink className="font-medium" to={'createpost'}>Create Post</NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Navbar;