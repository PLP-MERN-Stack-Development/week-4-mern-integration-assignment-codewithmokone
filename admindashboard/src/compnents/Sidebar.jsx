import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <aside className="w-64 h-screen bg-gray-800 text-white flex flex-col p-4">
            <h2 className="text-2xl font-bold mb-6">Blog Admin</h2>
            <nav className="w-[109%] flex flex-col space-y-10 mt-4">
                <NavLink className={({ isActive }) => isActive ? "flex items-center bg-gray-500 font-bold pl-2 rounded-l-3xl h-16" : ""} to="dashboard">Dashboard</NavLink>
                <NavLink className={({ isActive }) => isActive ? "flex items-center bg-gray-500 font-bold pl-2 rounded-l-3xl h-16" : ""} to="posts">Posts</NavLink>
                <NavLink className={({ isActive }) => isActive ? "flex items-center bg-gray-500 font-bold pl-2 rounded-l-3xl h-16" : ""} to="createpost">Create Post</NavLink>
                <NavLink className={({ isActive }) => isActive ? "flex items-center bg-gray-500 font-bold pl-2 rounded-l-3xl h-16" : ""} to="comments">Comments</NavLink>
                <NavLink className={({ isActive }) => isActive ? "flex items-center bg-gray-500 font-bold pl-2 rounded-l-3xl h-16" : ""} to="settings">Settings</NavLink>
            </nav>
     </aside>
    )
}

export default Sidebar;