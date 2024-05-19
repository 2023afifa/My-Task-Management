import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";


const Dashboard = () => {
    return (
        <div className="flex bg-slate-800">
            <div className="w-[100px] min-h-screen">
                <Sidebar></Sidebar>
            </div>
            <div className="w-full bg-slate-300 rounded-s-2xl">
                <Outlet></Outlet>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default Dashboard;