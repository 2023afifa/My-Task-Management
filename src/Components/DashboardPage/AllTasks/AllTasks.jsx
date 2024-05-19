import { SiGoogletasks } from "react-icons/si";
import AllTasksSidebar from "./AllTasksSidebar";
import TasksCard from "./TasksCard";
import { useState } from "react";
import AddTaskModal from "./AddTaskModal";
import { useGetTasksQuery } from "../../redux/features/tasks/tasksApi";
import { useSelector } from "react-redux";


const AllTasks = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { data: tasks, isLoading } = useGetTasksQuery();
    const { email } = useSelector(state => state.userSlice);

    const myTasks = tasks?.filter((item) => item.useremail === email);
    const pendingTasks = myTasks?.filter((item) => item.status == 'pending');
    const runningTasks = myTasks?.filter((item) => item.status == 'running');
    const doneTasks = myTasks?.filter((item) => item.status == 'done');

    return (
        <>
            <AddTaskModal isOpen={isOpen} setIsOpen={setIsOpen}></AddTaskModal>
            <div className="md:flex justify-between">
                <div className="p-10 w-full">
                    <div className="flex justify-between items-center">
                        <div className="flex">
                            <SiGoogletasks className="text-4xl mr-2" />
                            <h1 className="text-3xl font-semibold">My Tasks</h1>
                        </div>
                        <button onClick={() => setIsOpen(!isOpen)} className="btn bg-slate-700 text-slate-200 normal-case hover:bg-slate-600">Add Tasks</button>
                    </div>

                    <div className="divider"></div>

                    <div className="flex justify-between">
                        <div>
                            <div className="bg-slate-200 rounded p-2 flex justify-between w-80 mb-5">
                                <div className="flex items-center">
                                    <div className="border-4 border-red-500 rounded-full h-5 w-5 mx-2"></div>
                                    <h3 className="text-xl font-medium">To-do</h3>
                                </div>
                                <p className="text-xl font-medium mr-3">
                                    {pendingTasks?.length}
                                </p>
                            </div>
                            {
                                pendingTasks?.length === 0 ?
                                    <>
                                        <div className="p-5 text-lg text-center bg-slate-100 rounded">Nothing in "To-Do"</div>
                                    </>
                                    :
                                    pendingTasks?.map(item => <TasksCard key={item.id} task={item}></TasksCard>)
                            }
                        </div>

                        <div>
                            <div className="bg-slate-200 rounded p-2 flex justify-between w-80 mb-5">
                                <div className="flex items-center">
                                    <div className="border-4 border-yellow-500 rounded-full h-5 w-5 mx-2"></div>
                                    <h3 className="text-xl font-medium">On Progress</h3>
                                </div>
                                <p className="text-xl font-medium mr-3">
                                    {runningTasks?.length}
                                </p>
                            </div>
                            {
                                runningTasks?.length === 0 ?
                                    <>
                                        <div className="p-5 text-lg text-center bg-slate-100 rounded">Nothing in "On Progress"</div>
                                    </>
                                    :
                                    runningTasks?.map(item => <TasksCard key={item.id} task={item}></TasksCard>)
                            }
                        </div>

                        <div>
                            <div className="bg-slate-200 rounded p-2 flex justify-between w-80 mb-5">
                                <div className="flex items-center">
                                    <div className="border-4 border-green-500 rounded-full h-5 w-5 mx-2"></div>
                                    <h3 className="text-xl font-medium">Completed</h3>
                                </div>
                                <p className="text-xl font-medium mr-3">
                                    {doneTasks?.length}
                                </p>
                            </div>
                            {
                                doneTasks?.length === 0 ?
                                    <>
                                        <div className="p-5 text-lg text-center bg-slate-100 rounded">Nothing in "Completed"</div>
                                    </>
                                    :
                                    doneTasks?.map(item => <TasksCard key={item.id} task={item}></TasksCard>)
                            }
                        </div>

                    </div>

                </div>

                <div className="w-1/4 text-center p-5 bg-slate-500 min-h-screen rounded-s-2xl">
                    <AllTasksSidebar></AllTasksSidebar>
                </div>
            </div>
        </>
    );
};

export default AllTasks;