import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {

    return (
        <main className="w-full flex flex-col ">
            <Sidebar />
            <div className="flex flex-col ">
                <Header />
                <div>

                </div>
            </div>
        </main>
    )
}

export default Dashboard;