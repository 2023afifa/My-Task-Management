import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

const Dashboard = () => {
    return (
        <div className="flex bg-slate-800">
            <div className="w-[100px] min-h-screen">
                <Sidebar></Sidebar>
            </div>
            <div className="w-full bg-slate-50 rounded-s-2xl">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;