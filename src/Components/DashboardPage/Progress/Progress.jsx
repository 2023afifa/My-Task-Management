import { FaCalendarMinus } from "react-icons/fa";
import { useGetTasksQuery } from "../../redux/features/tasks/tasksApi";
import { useSelector } from "react-redux";
import AProgress from "./AProgress";
import AllTasksSidebar from "../AllTasks/AllTasksSidebar";

const Progress = () => {
    const { data: tasks, isLoading } = useGetTasksQuery();
    const { email } = useSelector(state => state.userSlice);

    const myTasks = tasks?.filter((item) => item.useremail === email && (item.status == "pending" || item.status == "running" || item.status == "done"));

    return (
        <div className='p-10 h-full'>
            <div className="flex">
                <FaCalendarMinus className="text-4xl mr-2" />
                <h3 className="text-3xl font-semibold">Your Task Progress</h3>
            </div>

            <div className="divider"></div>

            <div className="lg:flex lg:justify-between gap-10">
                {
                    myTasks?.length === 0 ?
                        <>
                            <p className="text-center text-xl my-10">Nothing In "Progress"</p>
                        </>
                        :
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:w-2/3">
                            {
                                myTasks?.map((task) => <AProgress key={task.id} task={task}></AProgress>)
                            }
                        </div>
                }

                <div className="flex flex-col justify-center gap-2">
                    <div className="card w-96 bg-neutral text-neutral-content mx-auto">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Task Reminders</h2>
                            <p>Team Meeting: May 19, 2024</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Accept</button>
                                <button className="btn btn-error text-white">Deny</button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-neutral text-neutral-content mx-auto">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Recent Activity</h2>
                            <p>Completed: <span className="font-semibold">Design Mockups</span></p>
                            <p className="text-gray-500 text-sm">2 hours ago</p>
                            <p>Updated: <span className="font-semibold">Marketing Plan</span></p>
                            <p className="text-gray-500 text-sm">1 day ago</p>
                        </div>
                    </div>
                    <div className="card w-96 bg-neutral text-neutral-content mx-auto">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Task Overview</h2>
                            <p>Completion Rate - Successful</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Progress;