const Footer = () => {
    return (
        <footer className="w-full h-16 flex justify-center items-center bg-gray-400 mt-10">
            <div>
                <p className="text-white">&copy; {new Date().getFullYear()} Blog. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;