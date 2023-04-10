import React from 'react';

// Render tasks in a list
const Overview = (props) => {
    const { tasks } = props;

    return (
    <ul>
        {tasks.map((task, index) => {
            return (
                <div id='task-cont' key={index}>
                    <li key={task.id}>{index+1}. {task.text}</li>
                    <button type="button" id='del-btn'>Delete</button>
                </div>
            );

        })}
    </ul>
    );
}

export default Overview;