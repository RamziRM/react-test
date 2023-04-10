import React from "react";

// Render tasks in a list
const Overview = (props) => {
    const { tasks, setTasks } = props;

    const handleDelete = (id) => {
        const updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks(updatedTasks);
    };

    return (
    <ul>
        {tasks.map((task, index) => {
            return (
                <div id='task-cont' key={index}>
                    <li key={task.id}>{index+1}. {task.text}</li>
                    <button 
                    type="button"
                    id='del-btn'
                    onClick={() => handleDelete(task.id)}
                    >X</button>
                </div>
            );

        })}
    </ul>
    );
}

export default Overview;