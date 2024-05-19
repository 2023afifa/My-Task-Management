import { useSelector } from "react-redux";
import { useGetTasksQuery } from "../../redux/features/tasks/tasksApi";
import Archive from "./Archive";
import { BsArchiveFill } from "react-icons/bs";


const Archives = () => {
    const { data: tasks, isLoading } = useGetTasksQuery();
    const { email } = useSelector(state => state.userSlice);

    const myTasks = tasks?.filter((item) => item.useremail === email && item.status == "archive");

    return (
        <div className="p-10">
            <div className="flex">
                <BsArchiveFill className="text-4xl mr-2" />
                <h3 className="text-3xl font-semibold">All Your Archives</h3>
            </div>

            <div className="divider"></div>

            {
                myTasks.length === 0 ?
                    <>
                        <p className="text-center text-xl my-10">Nothing In "Archive"</p>
                    </>
                    :
                    <div className="grid md:grid-cols-2 gap-3">
                        {
                            myTasks?.map((task) => <Archive key={task.id} task={task}></Archive>)
                        }
                    </div>
            }

        </div>
    );
};

export default Archives;