const Footer = () => {
    return (
        <footer className="w-full h-10 mr-8 flex items-center justify-center bg-gray-800">
            <p className="text-white">&copy; {new Date().getFullYear()} Blog. All rights reserved.</p>
        </footer>
    )
}

export default Footer