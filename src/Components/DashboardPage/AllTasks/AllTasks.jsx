import { SiGoogletasks } from "react-icons/si";
import AllTasksSidebar from "./AllTasksSidebar";
import TasksCard from "./TasksCard";
import { useState } from "react";
import AddTaskModal from "./AddTaskModal";
import { useSelector } from "react-redux";


const AllTasks = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { tasks } = useSelector(state => state.tasksSlice);

    const pendingTasks = tasks?.filter((item) => item.status == 'pending');
    const runningTasks = tasks?.filter((item) => item.status == 'running');
    const doneTasks = tasks?.filter((item) => item.status == 'done');

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
                                <p className="text-xl font-medium mr-3">0</p>
                            </div>
                            {
                                pendingTasks?.map(item => <TasksCard key={item.id} task={item}></TasksCard>)
                            }
                        </div>

                        <div>
                            <div className="bg-slate-200 rounded p-2 flex justify-between w-80 mb-5">
                                <div className="flex items-center">
                                    <div className="border-4 border-yellow-500 rounded-full h-5 w-5 mx-2"></div>
                                    <h3 className="text-xl font-medium">On Progress</h3>
                                </div>
                                <p className="text-xl font-medium mr-3">0</p>
                            </div>
                            {
                                runningTasks?.map(item => <TasksCard key={item.id} task={item}></TasksCard>)
                            }
                        </div>

                        <div>
                            <div className="bg-slate-200 rounded p-2 flex justify-between w-80 mb-5">
                                <div className="flex items-center">
                                    <div className="border-4 border-green-500 rounded-full h-5 w-5 mx-2"></div>
                                    <h3 className="text-xl font-medium">Completed</h3>
                                </div>
                                <p className="text-xl font-medium mr-3">0</p>
                            </div>
                            {
                                doneTasks?.map(item => <TasksCard key={item.id} task={item}></TasksCard>)
                            }
                        </div>

                    </div>

                </div>

                <div className="w-1/4 text-center p-5 bg-slate-500 h-screen rounded-s-2xl">
                    <AllTasksSidebar></AllTasksSidebar>
                </div>
            </div>
        </>
    );
};

export default AllTasks;