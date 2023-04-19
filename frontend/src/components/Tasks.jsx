import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { createTask } from "./utilities";
export const Task = () => {
  const tasks = useLoaderData();
  const [newTask, setNewTask] = useState("");
  const [currTasks, setCurrTasks] = useState(tasks)


  const getMyTasks = async() => {
    setCurrTasks(await createTask(newTask))
  }

  return (
    <div>
      <h1>Tasks</h1>
      <form onSubmit={(e)=>[e.preventDefault(), getMyTasks(), setNewTask('')]}>
        <input
          placeholder="task title"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <input type="submit" />
      </form>
      <ol>
        {currTasks.map((task) => (
          <li>{task.title}</li>
        ))}
      </ol>
    </div>
  );
};