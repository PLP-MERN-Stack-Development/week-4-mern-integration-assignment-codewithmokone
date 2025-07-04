import { Outlet } from "react-router-dom"
import Header from "./Header"
import Sidebar from "./Sidebar"
import Footer from "./Footer"

const Layout = () => {
    return (
        <div className='flex'>
            <div>
                <Sidebar />
            </div>
            <div>
                <Header />
                <div>
                    <Outlet />
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Layout;