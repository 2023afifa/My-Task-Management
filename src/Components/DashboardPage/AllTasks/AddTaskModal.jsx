import { useForm } from 'react-hook-form';
import Modal from './Modal';
// import { useAddTaskMutation } from '../../redux/features/tasks/taskApi';


const AddTaskModal = ({ isOpen, setIsOpen }) => {
    const { register, handleSubmit, reset } = useForm();
    //   const [addTask, { data, error }] = useAddTaskMutation();

    //   console.log(data);
    //   console.log(error);

    const onCancel = () => {
        reset();
        setIsOpen(false);
    };

    const onSubmit = (data) => {
        // addTask({ ...data, status: "pending" });
        onCancel();
    };

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Add Your Task">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col mb-5">
                    <label htmlFor="title" className="mb-2 font-semibold">
                        Title
                    </label>
                    <input
                        className="w-full rounded-md p-1"
                        type="text"
                        id="title"
                        {...register('title')}
                    />
                </div>
                <div className="flex flex-col mb-5">
                    <label htmlFor="title" className="mb-2 font-semibold">
                        Description
                    </label>
                    <textarea
                        className="w-full rounded-md"
                        type="text"
                        id="description"
                        {...register('description')}
                    />
                </div>
                <div className="flex flex-col mb-5">
                    <label htmlFor="title" className="mb-2 font-semibold">
                        Deadline
                    </label>
                    <input
                        className="w-full rounded-md"
                        type="date"
                        id="date"
                        {...register('date')}
                    />
                </div>
                <div className="flex flex-col mb-5">
                    <label htmlFor="title" className="mb-2 font-semibold">
                        Priority
                    </label>
                    <select
                        className="w-full rounded-md"
                        id="priority"
                        {...register('priority')}
                    >
                        <option defaultValue value="high">
                            High
                        </option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                </div>
                <div className="flex gap-3 justify-end">
                    <button
                        onClick={() => onCancel()}
                        type="button"
                        className="btn normal-case"
                    >
                        Cancel
                    </button>
                    <button type="submit" className="btn bg-slate-700 text-white normal-case">
                        Submit
                    </button>
                </div>
            </form>
        </Modal>
    );
};

export default AddTaskModal;
