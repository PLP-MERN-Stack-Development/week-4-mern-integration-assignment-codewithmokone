import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="w-64 h-screen bg-gray-800 text-white flex flex-col p-4">
            <h2 className="text-2xl font-bold mb-6">Blog Admin</h2>
            <nav className="flex flex-col space-y-8 mt-4">
                <NavLink to="/">Dashboard</NavLink>
                <NavLink to="posts">Posts</NavLink>
                <NavLink to="posts">Create Post</NavLink>
                <NavLink to="posts">Comments</NavLink>
                <NavLink to="posts">Settings</NavLink>
            </nav>
     </div>
    )
}

export default Sidebar;