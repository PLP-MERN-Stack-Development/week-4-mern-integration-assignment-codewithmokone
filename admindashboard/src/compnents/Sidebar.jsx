import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="w-64 h-screen bg-gray-800 text-white flex flex-col p-4">
            <h2 className="text-2xl font-bold mb-6">Blog Admin</h2>
            <nav className="w-[109%] flex flex-col space-y-2 mt-4">
                <NavLink className="flex items-center active:bg-gray-500 hover:bg-gray-500 hover:pl-2 hover:rounded-l-3xl h-16 mt-4" to="dashboard">Dashboard</NavLink>
                <NavLink className="flex items-center active:bg-gray-500 hover:bg-gray-500 hover:pl-2 hover:rounded-l-3xl h-16 mt-4" to="posts">Posts</NavLink>
                <NavLink className="flex items-center active:bg-gray-500 hover:bg-gray-500 hover:pl-2 hover:rounded-l-3xl h-16 mt-4" to="createpost">Create Post</NavLink>
                <NavLink className="flex items-center active:bg-gray-500 hover:bg-gray-500 hover:pl-2 hover:rounded-l-3xl h-16 mt-4" to="comments">Comments</NavLink>
                <NavLink className="flex items-center active:bg-gray-500 hover:bg-gray-500 hover:pl-2 hover:rounded-l-3xl h-16 mt-4" to="settings">Settings</NavLink>
            </nav>
     </div>
    )
}

export default Sidebar;