import { useForm } from 'react-hook-form';
import Modal from './Modal';
import { useAddTasksMutation } from '../../redux/features/api/baseApi';
import { useSelector } from 'react-redux';


const AddTaskModal = ({ isOpen, setIsOpen }) => {
    const { register, handleSubmit, reset } = useForm();
    const [addTask, { data, error }] = useAddTasksMutation();
    const { email } = useSelector(state => state.userSlice);

    const onCancel = () => {
        reset();
        setIsOpen(false);
    };

    const onSubmit = (data) => {
        addTask({ ...data, status: "pending", useremail: email });
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
                        className="w-full rounded-md p-1"
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
                        className="w-full rounded-md p-1"
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
                        className="w-full rounded-md p-1"
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
                        className="btn bg-red-500 text-white normal-case border-none"
                    >
                        Cancel
                    </button>
                    <button type="submit" className="btn bg-blue-500 text-white normal-case border-none">
                        Submit
                    </button>
                </div>
            </form>
        </Modal>
    );
};

export default AddTaskModal;
