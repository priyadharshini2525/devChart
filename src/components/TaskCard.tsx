type TaskCardProps = {
    title: string;
    description: string;
    priority: string;
    status: string;
    _id : string;
    fetchTasks : () => void;
};

const TaskCard = ({ title, description, priority, status, _id, fetchTasks}: TaskCardProps) => {
    const bgClass =
        priority.toLowerCase() === "high"
            ? "bg-red-400"
            : priority.toLowerCase() === "medium"
            ? "bg-yellow-400"
            : "bg-green-400";
    
    async function updatestatus(newStatus) {
    const response = await fetch(`/api/tasks/${_id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus })
    });
    fetchTasks();
    }

    async function deletetask() {
    const response = await fetch(`/api/tasks/${_id}`, {
        method: "DELETE",
    });
    fetchTasks();
    }

    return (
        <div className={`flex h-auto w-64 self-start flex-col rounded-2xl border-2 border-black overflow-hidden shrink-0 ${bgClass}`} 
          draggable={true} 
          onDragStart={(e) => e.dataTransfer.setData("taskId", _id)}>
            <div className="bg-black p-3 text-xl font-bold text-teal-200 flex justify-between items-center">
                <h2>{title}</h2>
                <button onClick={() => { if (window.confirm("Delete this task?")) deletetask()}}>x</button>
        
            
            </div>

            <div className="p-3">
                <div className="rounded-xl border border-black bg-teal-200 p-3 text-sm wrap-break-words">
                    {description}
                </div>
                <select value = {status} onChange = {(e)=>updatestatus(e.target.value)}>
                    <option value="todo">Todo</option>
                    <option value="inprogress">In Progress</option>
                    <option value="done">Done</option>
                </select>
            </div>
        </div>
    );
};


export default TaskCard;
