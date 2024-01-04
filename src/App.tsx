import { useState } from 'react'
import Task from './Task'
import { TaskType } from './Task';
import './Task.css'


function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [taskInput, setTaskInput] = useState("");
  const [taskId, setTaskId] = useState(1);

  const deleteFn = (task: TaskType) => {
    const updatedTasks = tasks.filter((t: TaskType) => {
      if (t.id === task.id) {
        return false;
      } else {
        return true;
      }
    })
    setTasks([...updatedTasks]);
  }

  const completeFn = (task: TaskType) => {
    
  }

  return (
    <div className="App">
      <div className="task-input-div">
        <input type="text"
         className="task-input"
         value={taskInput}
         onChange={(e) => setTaskInput(e.target.value)}/>
        
        <button onClick={() => {
          const newTask: TaskType = {id: taskId, title: taskInput};
          setTasks([...tasks, newTask]);
          setTaskInput('');
          setTaskId(taskId + 1);
        }}>Add Task</button>
      
        </div>
      <main>
        {tasks.map((t: TaskType) => {
          return <Task key={t.id} task={t} deleteFn={deleteFn}/>
        })}
      </main>
    </div>
  )
}

export default App
