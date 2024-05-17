import { MdDone } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { updateStatus } from "../../redux/features/tasks/tasksSlice";

const TasksCard = ({ task }) => {
    const dispatch = useDispatch();

    let updatedStatus;

    if (task.status === 'pending') {
        updatedStatus = 'running';
    } else if (task.status === 'running') {
        updatedStatus = 'done';
    } else {
        updatedStatus = 'archive';
    }


    return (
        <div className="mb-2 p-5 bg-slate-100 rounded">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>{task.date}</p>
            <div className="flex justify-center gap-5 mt-2">
                <button className="text-2xl bg-red-500 text-white rounded w-16 py-2"><RiDeleteBinLine className="mx-auto" /></button>
                <button onClick={() => dispatch(updateStatus({ id: task.id, status: updatedStatus }))} title="Update Status" className="text-2xl bg-blue-500 text-white rounded w-16 py-2">
                    <MdDone className="mx-auto" />
                </button>
            </div>
        </div>
    );
};

export default TasksCard;