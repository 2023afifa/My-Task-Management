import { useSelector } from "react-redux";

const AllTasksSidebar = () => {
    const { name } = useSelector(state => state.userSlice);

    return (
        <div>
            <h1 className="text-2xl text-slate-50 font-medium">{name},</h1>
            <h2 className="text-xl text-slate-50 font-medium mb-10">See Your Activity</h2>
            <div className="stats stats-vertical shadow">
                <div className="stat">
                    <div className="stat-title">Total Tasks</div>
                    <div className="stat-value">230</div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>
                <div className="stat">
                    <div className="stat-title">Completed Tasks</div>
                    <div className="stat-value">156</div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>
                <div className="stat">
                    <div className="stat-title">In Progress Tasks</div>
                    <div className="stat-value">12</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
                <div className="stat">
                    <div className="stat-title">Due Tasks</div>
                    <div className="stat-value">27</div>
                </div>
                <div className="stat">
                    <div className="stat-title">Assigned Tasks</div>
                    <div className="stat-value">20</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>
            </div>
        </div>
    );
};

export default AllTasksSidebar;