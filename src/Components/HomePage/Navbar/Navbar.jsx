import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import { logout } from "../../redux/features/user/userSlice";

const Navbar = () => {
    const { photo, email } = useSelector((state) => state.userSlice);
    const dispatch = useDispatch();

    const handleLogout = () => {
        signOut(auth);
        dispatch(logout());
    }

    const navLink =
        <>
            <li><NavLink className="mr-2" to="/">Home</NavLink></li>
            {
                email ?
                    <li><NavLink onClick={handleLogout} className="mr-2" to="/login">Logout</NavLink></li>
                    :
                    <li><NavLink className="mr-2" to="/login">Login</NavLink></li>
            }
        </>

    return (
        <div>
            <div className="navbar md:px-5 lg:px-10 bg-transparent absolute">
                <div className="md:navbar-start">
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold uppercase">TaskPlus</h2>
                    </div>
                </div>
                <div className="md:hidden flex flex-grow justify-end">
                    <div className="dropdown navStyle">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content right-3 z-[1] p-1 shadow bg-base-100 rounded-box w-28">
                            {navLink}
                        </ul>
                    </div>
                </div>
                <div className="navbar-end hidden md:flex">
                    <div className="flex-none navStyle">
                        <ul className="menu menu-horizontal px-1 lg:text-lg font-medium space-x-5 items-center">
                            {navLink}
                            {
                                email ?
                                    <>
                                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                            <div className="w-8 md:w-10 rounded-full">
                                                <img src={photo} />
                                            </div>
                                        </label>
                                    </>
                                    :
                                    <>
                                        <Link to="/signup">
                                            <button className="bg-purple-700 text-slate-200 py-2 px-5 rounded-3xl">Join</button>
                                        </Link>
                                    </>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;