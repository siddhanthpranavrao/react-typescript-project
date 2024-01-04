import './Task.css';

type TaskProps = {
    task: TaskType;
    deleteFn: (title: TaskType) => void  
}

export type TaskType = {
    id: number,
    title: string
}

export default function Task({ task, deleteFn }: TaskProps) {
    return (
        <div className="task">
            <h2 className="task-title">{task.title}</h2>
            <button className="task-completed-btn" >Completed</button>
            <button className="task-clear-btn" onClick={() => deleteFn(task)}>Clear</button>
        </div>
    )
}
