import { Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <h1 className="text-4xl text-center font-bold">WelCome to Dashboard</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;