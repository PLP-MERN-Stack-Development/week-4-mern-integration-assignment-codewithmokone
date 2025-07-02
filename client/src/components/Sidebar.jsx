const Sidebar = () => {
    return (
        <div className="w-64 h-screen bg-gray-800 text-white flex flex-col p-4">
            <h2 className="text-2xl font-bold mb-6">Blog Admin</h2>
            <nav className="space-y-4">
                <a href="#" className="hover:text-gray-300">Dashboard</a>
                <a href="#" className="hover:text-gray-300">Posts</a>
                <a href="#" className="hover:text-gray-300">Create Post</a>
                <a href="#" className="hover:text-gray-300">Comments</a>
                <a href="#" className="hover:text-gray-300">Settings</a>
            </nav>
     </div>
    )
}

export default Sidebar;