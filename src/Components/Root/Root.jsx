import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="font-opensans">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;