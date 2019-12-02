import React, { Component } from "react";
// import '../text-area-resize.js';
import "./Menu.css";
import logo from "./note.png"; // with import

class Menu extends Component {
  state = {
    email: "",
    password: "",
  };
  handleChange = (e) => {
    switch (e.target.name) {
      case "email":
        this.setState({
          email: e.target.value,
        });
        break;

      case "password":
        this.setState({
          password: e.target.value,
        });
        break;
      default:
        break;
    }
  };

  render() {
    let { token, user } = this.props.data;

    let welcomeMessage = "";
    let loginContainer = "";

    if (user.name === "") {
      welcomeMessage = "Welcome, please login to use the app";
    } else {
      welcomeMessage = "Hi " + user.name + ". What to do?";
    }

    if (user.name !== "") {
      loginContainer = (
        <div className="logo-container">
          <img className="logo-image" src={logo} alt="Logo"></img>
          <div className="app-logo">Reminder</div>
        </div>
      );
    } else {
      loginContainer = (
        <div className="login-container">
          <input
            placeholder="email"
            name="email"
            onChange={this.handleChange}
          ></input>
          <input
            placeholder="password"
            name="password"
            type="password"
            onChange={this.handleChange}
          ></input>
          <button
            className="loginButton"
            onClick={() =>
              this.props.handleLogInClick(this.state.email, this.state.password)
            }
          >
            Login
          </button>
        </div>
      );
    }

    return (
      <nav class="nav">
        {loginContainer}
        <div class="nav-container">
          <ul>
            <li>
              <a href="/tasks">
                <i class="flaticon flaticon-list" />
                Tasks
              </a>
            </li>
            <li>
              <a href="/about">
                <i class="" />
                About
              </a>
            </li>
            <li>
              <a href="/">
                <i
                  class="flaticon flaticon-logout"
                  onClick={() => this.props.handleLogOutClick(token)}
                />
                Log Out
              </a>
            </li>
          </ul>
        </div>
        <p class="navMessage">{welcomeMessage}</p>
      </nav>
    );
  }
}
export default Menu;
