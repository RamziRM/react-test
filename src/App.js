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

  hancdleChange = (e) => {
    this.setState({
      task: { text: e.target.value }
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setStateState({
      tasks: this.state.tasks.concat(this.state.task),
      task: { text: '' }
    });
  };
  
  render() {
    const { task, tasks } = this.state;

    return (
      <div>
        <h1>Task list</h1>
        <form>
          <input type="text" id="taskInput" placeholder="Add task" />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default App;
