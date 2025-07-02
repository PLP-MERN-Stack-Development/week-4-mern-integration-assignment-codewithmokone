import { Outlet } from "react-router-dom"
import Header from "./Header"
import Sidebar from "./Sidebar"

const Layout = () => {
    return (
        <div className='flex'>
            <Sidebar />
            <div className='w-full'>
                <Header />
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Layout;