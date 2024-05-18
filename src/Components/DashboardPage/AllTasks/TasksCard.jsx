import { MdDone } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { removeTask, updateStatus } from "../../redux/features/tasks/tasksSlice";
import { useUpdateTasksMutation } from "../../redux/features/api/baseApi";

const TasksCard = ({ task }) => {
    const [updateTasks, { data, error }] = useUpdateTasksMutation();

    let updatedStatus;

    if (task.status === 'pending') {
        updatedStatus = 'running';
    } else if (task.status === 'running') {
        updatedStatus = 'done';
    } else {
        updatedStatus = 'archive';
    }


    return (
        <div className="w-80 mb-2 p-5 bg-slate-100 rounded">
            <h3 className="text-lg font-medium">{task.title}</h3>
            <p className="text-justify text-sm">{task.description}</p>
            <p className="text-sm font-medium my-2">Deadline: {task.date}</p>
            <div className="flex justify-center gap-5 mt-2">
                {/* <button onClick={() => dispatch(removeTask(task.id))} className="text-2xl bg-red-500 text-white rounded w-16 py-2"><RiDeleteBinLine className="mx-auto" /></button> */}
                <button onClick={() => updateTasks({ id: task._id, data: { status: updatedStatus } })} title="Update Status" className="text-2xl bg-blue-500 text-white rounded w-16 py-2">
                    <MdDone className="mx-auto" />
                </button>
            </div>
        </div>
    );
};

export default TasksCard;