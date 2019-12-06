/* eslint-disable no-fallthrough */
/* eslint-disable default-case */
import React, { Component } from "react";

import "./AddTask.css";

class AddTask extends Component {
  state = {
    id: 22,
    text: "",
    title: "",
    category: "",
    creationDate: "",
  };
  handleChange = (e) => {
    switch (e.target.name) {
      case "task-title":
        this.setState({
          title: e.target.value,
        });
        break;

      case "task-text":
        this.setState({
          text: e.target.value,
        });
        break;
      case "category":
        this.setState({
          category: e.target.value,
        });
        break;
    }
  };

  handleAddTask = (token, title, text, category, creationDate) => {
    creationDate = new Date();
    this.props.handleAddTaskAxios(token, title, text, category, creationDate);
    this.setState({
      id: null,
      text: "",
      title: "",
      category: "",
      creationDate,
    });
  };

  render() {
    let token = this.props.data.token;
    const { title, text, category, creationDate } = this.state;
    return (
      <div className="addTask-container">
        <div className="addTask-form">
          <input
            className="input"
            type="text"
            name="task-title"
            placeholder="Task title"
            value={title}
            onChange={this.handleChange}
          />
          <textarea
            className="text-area"
            id="txtArea"
            name="task-text"
            cols="10"
            rows="3"
            placeholder="Enter task"
            value={text}
            onChange={this.handleChange}
          />
          <select name="category" id="" onChange={this.handleChange}>
            <option value="none">none</option> />
            <option value="shopping">shopping</option>
            <option value="work">work</option>
            <option value="hobby">hobby</option>
          </select>
          <button
            className="button"
            onClick={() =>
              this.handleAddTask(token, title, text, category, creationDate)
            }
          >
            Add task
          </button>
        </div>
      </div>
    );
  }
}

export default AddTask;
