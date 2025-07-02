import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="w-64 h-screen bg-gray-800 text-white flex flex-col p-4">
            <h2 className="text-2xl font-bold mb-6">Blog Admin</h2>
            <nav className="w-screen flex flex-col space-y-2 mt-4">
                <NavLink className="flex items-center active:bg-gray-500 hover:bg-gray-500 hover:pl-2 hover:rounded-l-3xl h-16 mt-4" to="/">Dashboard</NavLink>
                <NavLink className="flex items-center active:bg-gray-500 hover:bg-gray-500 hover:pl-2 hover:rounded-l-3xl h-16 mt-4" to="/" to="posts">Posts</NavLink>
                <NavLink className="flex items-center active:bg-gray-500 hover:bg-gray-500 hover:pl-2 hover:rounded-l-3xl h-16 mt-4" to="/" to="posts">Create Post</NavLink>
                <NavLink className="flex items-center active:bg-gray-500 hover:bg-gray-500 hover:pl-2 hover:rounded-l-3xl h-16 mt-4" to="/" to="posts">Comments</NavLink>
                <NavLink className="flex items-center active:bg-gray-500 hover:bg-gray-500 hover:pl-2 hover:rounded-l-3xl h-16 mt-4" to="/" to="posts">Settings</NavLink>
            </nav>
     </div>
    )
}

export default Sidebar;