import { BsArchiveFill } from "react-icons/bs";
import { SiGoogletasks } from "react-icons/si";
import { NavLink } from "react-router-dom";
import { FaCalendarMinus, FaHome } from "react-icons/fa";
import { GrLogout } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { logout } from "../../redux/features/user/userSlice";
import auth from "../../Firebase/firebase.config";

const Sidebar = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        signOut(auth);
        dispatch(logout());
    }

    return (
        <div className="flex flex-col h-full">
            <div className="mt-3 mb-20 mx-3 bg-gray-100 rounded-lg">
                <img className="w-10 p-1 rounded-md mx-auto" src="../../../../images/checklist.png" alt="" />
                <h3 className="font-bold text-lg text-center italic">TASK <br />PLUS</h3>
            </div>
            <div className="flex flex-col h-full">
                <NavLink to="/dashboard/alltasks" className={({ isActive }) => isActive ? "text-gray-200" : "text-gray-500"}>
                    <SiGoogletasks className="text-4xl mx-auto hover:text-gray-200 mb-5" />
                </NavLink>
                <NavLink to="/dashboard/archive" className={({ isActive }) => isActive ? "text-gray-200" : "text-gray-500"}>
                    <BsArchiveFill className="text-3xl mx-auto hover:text-gray-200 mb-5" />
                </NavLink>
                <NavLink to="/dashboard/calender" className={({ isActive }) => isActive ? "text-gray-200" : "text-gray-500"}>
                    <FaCalendarMinus className="text-3xl mx-auto hover:text-gray-200 mb-5" />
                </NavLink>
                <NavLink to="/" className={({ isActive }) => isActive ? "text-gray-200" : "text-gray-500"}>
                    <FaHome className="text-4xl mx-auto hover:text-gray-200 mb-5" />
                </NavLink>
                <GrLogout onClick={handleLogout} className="text-3xl mx-auto text-gray-500 hover:text-gray-200 mb-10 mt-auto" />
            </div>
        </div>
    );
};

export default Sidebar;