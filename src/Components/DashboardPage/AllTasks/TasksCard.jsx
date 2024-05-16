import { MdDone } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";

const TasksCard = () => {
    return (
        <div className="mb-2 bg-slate-100 p-2">
            <h3>Title</h3>
            <p>Description</p>
            <p>Date</p>
            <div className="flex justify-around my-3">
                <button className="text-2xl bg-red-500 text-white rounded w-16 py-2"><RiDeleteBinLine className="mx-auto" /></button>
                <button className="text-2xl bg-blue-500 text-white rounded w-16 py-2"><MdDone className="mx-auto" /></button>
            </div>
        </div>
    );
};

export default TasksCard;