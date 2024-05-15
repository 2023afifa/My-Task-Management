import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Banner = () => {
    const { email } = useSelector(state => state.userSlice);

    return (
        <div className="flex md:justify-between md:items-center">
            <div className="flex-1 pl-10">
                <h1 className="text-5xl font-bold mb-5">Effortless Task Management: Organize, Collaborate, and Stay Productive</h1>
                <p className="text-lg mb-5">Empower Your Team to Achieve More. Effortlessly Prioritize Tasks, Collaborate Seamlessly, and Stay on Track with Our Intuitive Task Management Platform.</p>
                <Link to={email ? "/dashboard" : "/login"}>
                    <button className="bg-purple-700 text-slate-200 py-3 px-5 rounded-3xl">Let's Get Started</button>
                </Link>
            </div>
            <div className="w-3/5">
                <img className="" src="https://i.ibb.co/bW0kXf2/Tiny-people-using-appointment-calendar-app-for-planning-events.jpg" alt="" />
            </div>
        </div>
    );
};

export default Banner;