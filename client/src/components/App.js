import React, { Component } from "react";
import TaskList from "./TaskList";
import AddTask from "./AddTask";
import Menu from "./Menu";
import Footer from "./Footer";
import "./icons/font/flaticon.css";
import axios from "axios";

import "./App.css";

class App extends Component {
  counter = 4;
  state = {
    data: {
      token: "",
      error: false,
      user: {
        name: "",
        email: "",
      },
    },
    tasks: [
      // {
      //   _id: 0,
      //   title: "Tytul0",
      //   text: "tekst0",
      //   category: "kategoria0",
      //   creationDate: "2018-02-15",
      //   finishDate: null,
      //   done: false,
      // },
      // {
      //   _id: 1,
      //   title: "Tytul1",
      //   text: "tekst1",
      //   category: "kategoria1",
      //   creationDate: "2018-02-16",
      //   finishDate: null,
      //   done: false,
      // },
      // {
      //   _id: 3,
      //   title: "Tytul2",
      //   text: "tekst2",
      //   category: "kategoria2",
      //   creationDate: "2018-02-10",
      //   finishDate: null,
      //   done: false,
      // },
    ],
    tasksHistory: [],
  };

  componentDidMount() {}
  componentDidUpdate() {
    console.log("Edycja App js");
  }

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

  handleAddClickAxios = (token, title, text, category, creationDate) => {
    const api = "http://localhost:3000/tasks/";
    let data = {
      title: title,
      text: text,
      category: category,
      creationDate: creationDate,
      done: false,
    };
    axios
      .post(api, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then(this.getTasksAxios(token));
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
      })
      .catch((error) => {
        this.setState((prevState) => ({
          data: {
            // object that we want to update
            ...prevState.data, // keep all other key-value pairs
            error: true,
          },
        }));
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

  render() {
    return (
      <div className="app-container">
        <Menu
          handleLogInClick={this.handleLogInClick}
          handleLogOutClick={this.handleLogOutClick}
          data={this.state.data}
        />
        <div className="interface-container">
          <AddTask
            handleAddTaskAxios={this.handleAddClickAxios}
            data={this.state.data}
          />
          <TaskList
            tasks={this.state.tasks}
            handleDeleteClick={this.handleDeleteClickAxios}
            handleEditClick={this.handleEditClick}
            handleTaskDone={this.handleTaskDone}
            data={this.state.data}
          />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
