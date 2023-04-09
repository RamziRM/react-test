// Handle input field with logic
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: { text: ''},
      tasks: []
    };
  }

  handleChange = (e) => {
    this.setState({
      task: { text: e.target.value }
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: { text: '' }
      // above clears the input field after submit - for next task input
    });
  };
  
  render() {
    const { task, tasks } = this.state;

    return (
      <div>
        <h1>Task list</h1>
        <form onSubmit={this.onSubmitTask}>
          <input
          onChange={this.handleChange}
          value={task.text}
          type="text" 
          id="taskInput" 
          placeholder="Add task" />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default App;
