import React, { useState } from "react";

function List() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [Error, setError] = useState();

  const handleAddTask = () => {
    if (task) {
      if (isEditing) {
        const updatedTasks = tasks.map((t, i) =>
          i === currentIndex ? task : t
        );
        setTasks(updatedTasks);
        setIsEditing(false);
        setCurrentIndex(null);
      } else {
        setTasks([...tasks, task]);
      }
      setTask("");
    } else {
      setError("please enter something bro...");
    }
  };

  const handleEditTask = (index) => {
    setTask(tasks[index]);
    setIsEditing(true);
    setCurrentIndex(index);
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="max-w-md mx-auto mt-10  ">
      <h1 className="text-4xl text-gray-200 font-bold mb-4 text-center">
        To-Do List
      </h1>
      <div className="flex items-center space-x-4 mb-4">
        <input
          type="text"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
            setError("");
          }}
          placeholder="Enter your task"
          className="flex-grow px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-400"
        />
        <button
          onClick={handleAddTask}
          className="px-4 py-2 text-white bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          {isEditing ? "Update Task" : "Add Task"}
        </button>
      </div>
      <div className="containeriner text-red-500 ">{Error}</div>
      <ul className="list-disc list-inside">
        {tasks.map((task, index) => (
          <li
            key={index}
            className=" text-2xl text-white flex justify-between items-center mb-2"
          >
            <span>{task}</span>
            <div>
              <button
                onClick={() => handleEditTask(index)}
                className="mr-2  text-blue-500 hover:text-blue-700"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteTask(index)}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
