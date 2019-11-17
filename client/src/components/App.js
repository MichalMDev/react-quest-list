import React, { Component } from "react";
import TaskList from "./TaskList";
import AddTask from "./AddTask";
import Menu from "./Menu";
import "./icons/font/flaticon.css";

import "./App.css";

class App extends Component {
  counter = 4;
  state = {
    data: {
      token: "",
      user: {
        name: "",
        email: "",
      },
    },
    tasks: [
      {
        id: 0,
        title: "Tytul0",
        text: "tekst0",
        category: "kategoria0",
        creationDate: "2018-02-15",
        finishDate: null,
        done: false,
      },
      {
        id: 1,
        title: "Tytul1",
        text: "tekst1",
        category: "kategoria1",
        creationDate: "2018-02-16",
        finishDate: null,
        done: false,
      },
      {
        id: 3,
        title: "Tytul2",
        text: "tekst2",
        category: "kategoria2",
        creationDate: "2018-02-10",
        finishDate: null,
        done: false,
      },
    ],
    tasksHistory: [],
  };

  componentDidMount() {
    // Call our fetch function below once the component mounts
    // this.getTasks().then((res) => this.setState({ data: res.express })).catch((err) => console.log(err));
    // this.callBackendTasks1().then((res) => this.setState({ data: res.express })).catch((err) => console.log(err));
  }
  componentDidUpdate() {
    console.log("Edycja App js");
  }
  getTasks = async () => {
    const response = await fetch("localhost:4000/tasks");
    const body = await response.json();
    console.log(body);

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  handleAddTask = (title, text, category) => {
    console.log("Dodajemy nowy elem");

    const newTask = {
      id: this.counter,
      title,
      text,
      category,
      done: false,
      finishDate: null,
      creationDate: new Date().getTime(),
      // new Date().toLocaleDateString().slice(0, 10) + ', ' + new Date().toLocaleTimeString().slice(0, 5)
    };
    const newTasksList = [...this.state.tasks];
    newTasksList.push(newTask);

    this.setState({
      tasks: newTasksList,
    });
    this.counter++;
    return true;
  };

  handleDeleteClick = (id) => {
    this.handleTaskDone(id);

    let tasks = this.state.tasks.filter((task) => task.id !== id);

    this.setState({
      tasks,
    });
  };

  handleTaskDone = (id) => {
    const tasks = Array.from(this.state.tasks);
    tasks.forEach((task) => {
      if (task.id === id) {
        task.done = true;
        task.finishDate = new Date().getTime();
        // let tasksHistory = this.state.tasksHistory.push(task);

        this.setState((prevState) => ({
          tasksHistory: [...prevState.tasksHistory, task],
        }));
      }
    });
  };
  handleLogInClick = (email, password) => {
    email = "michux12@gmail.com";
    password = "qweasd123";
    console.log("Trying to login ");
    fetch("http://localhost:3000/users/login", {
      // mode: "no-cors",
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          data,
        }),
      );
  };

  handleLogOutClick = (token) => {
    console.log("Trying to logout");
    fetch("http://localhost:3000/users/logout", {
      // mode: "no-cors",
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: token }),
    })
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          data,
        }),
      );
  };

  // 	if (response.status !== 200) {
  // 		throw Error(body.message);
  // 	}
  // 	return body;
  // };

  render() {
    console.log(this.state.tasks);

    return (
      <div className="app-container">
        <Menu
          handleLogInClick={this.handleLogInClick}
          handleLogOutClick={this.handleLogOutClick}
          data={this.state.data}
        />
        <div className="interface-container">
          <AddTask handleAddTask={this.handleAddTask} data={this.state.data} />
          <TaskList
            tasks={this.state.tasks}
            handleDeleteClick={this.handleDeleteClick}
            handleEditClick={this.handleEditClick}
            handleTaskDone={this.handleTaskDone}
            data={this.state.data}
          />
        </div>
      </div>
    );

    // <p className="App-intro">{this.state.data}</p>
  }
}

export default App;
