import React, { Component } from "react";
import TaskList from "./TaskList";
import AddTask from "./AddTask";
import Menu from "./Menu";
import "./icons/font/flaticon.css";
import axios from "axios";

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
        _id: 0,
        title: "Tytul0",
        text: "tekst0",
        category: "kategoria0",
        creationDate: "2018-02-15",
        finishDate: null,
        done: false,
      },
      {
        _id: 1,
        title: "Tytul1",
        text: "tekst1",
        category: "kategoria1",
        creationDate: "2018-02-16",
        finishDate: null,
        done: false,
      },
      {
        _id: 3,
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

  // getTasks = (token) => {
  //   token =
  //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGNmZjFhMjQzZWUwNTJmNmNkMjAzYzgiLCJpYXQiOjE1NzM5ODEwODV9.qUY8RCpc6ABRX7qPw_ea8lKaFg9xDRw2fkiVne1L-s4";

  //   fetch("http://localhost:3000/tasks", {
  //     method: "GET",
  //     mode: "no-cors",
  //     async: true,
  //     crossDomain: true,
  //     headers: {
  //       Accept: "*/*",
  //       "Content-Type": "application/json",
  //       Authorization: "Bearer " + token,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then(
  //       (tasks) =>
  //         this.setState({
  //           tasks,
  //         }),
  //       console.log(token),
  //     );
  // };

  getTasksAxios = (token) => {
    const api = "http://localhost:3000/tasks";
    axios
      .get(api, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        console.log(res.data);
        this.setState({
          tasks: res.data,
        });
      });
  };

  handleAddTask = (title, text, category, creationDate) => {
    const token = this.state.data.token;

    console.log("Adding App.js");

    // let bodyParameters = {
    //   title: title,
    //   text: text,
    //   category: category,
    //   creationDate: creationDate,
    //   done: false,
    // };
    // let config = {
    //   headers: {
    //     ["Authorization"]: "Bearer " + token,
    //     Accept: "*/*",
    //     "Content-Type": "application/json",
    //   },
    // };
    // console.log(config);
    // axios
    //   .post("http://localhost:3000/tasks", bodyParameters, config)
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    fetch("http://localhost:3000/tasks", {
      method: "POST",
      mode: "no-cors",
      async: true,
      crossDomain: true,
      withCredentials: true,
      credentials: "include",
      headers: new Headers({
        ["Accept"]: "*/*",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
        ["credentials"]: "include",
      }),
      body: JSON.stringify({
        title: title,
        text: text,
        category: category,
        creationDate: creationDate,
      }),
    }).then((res) => console.log(res.json()));

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

  handleDeleteClickAxios = (token, id) => {
    const api = "http://localhost:3000/tasks/" + id;
    axios
      .delete(api, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        console.log(res.data);
        this.getTasksAxios(token);
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
    // email = "michux12@gmail.com";
    // password = "qweasd123";
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
      )
      .then(() => {
        this.getTasksAxios(this.state.data.token);
      });
  };

  handleLogOutClick = (token) => {
    console.log("Trying to logout");
    fetch("http://localhost:3000/users/logout", {
      mode: "no-cors",
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
            handleDeleteClick={this.handleDeleteClickAxios}
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
