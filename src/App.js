// Handle input field with logic
import React, { Component } from "react";
import uniqid from "uniqid";
import Overview from "./components/Overview";

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: {
        text: '',
        id: uniqid()
      },
      tasks: []
        };
  }

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id
      }
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: { 
        text: '',
        id: uniqid()
      }
      // above clears the input field after submit - for next task input
    });
  };
  
  render() {
    const { task, tasks } = this.state;

    return (
      <div className="main-cont">
        <h1>Task list</h1>
        <form onSubmit={this.onSubmitTask}>
          <input
          onChange={this.handleChange}
          value={task.text}
          type="text" 
          id="taskInput" 
          placeholder="Add task" 
          autoFocus/>
          <button id="submit-btn" type="submit">Add</button>
        </form>
        <Overview tasks={tasks} />
      </div>
    );
  }
}

export default App;
