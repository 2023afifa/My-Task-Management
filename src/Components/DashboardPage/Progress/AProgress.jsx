const AProgress = ({ task }) => {
    let myProgress;

    if (task.status === "pending") {
        myProgress = 33;
    } else if (task.status === "running") {
        myProgress = 66;
    } else if (task.status === "done") {
        myProgress = 100;
    }


    return (
        <div>
            <div className="radial-progress" style={{ "--value": myProgress, "--size": "12rem", "--thickness": "2rem" }} role="progressbar">{myProgress}%</div>
            <h4 className="text-xl font-medium mt-2">{task.title}</h4>
        </div>
    );
};

export default AProgress;