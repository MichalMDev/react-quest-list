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
    let { token, error, user } = this.props.data;

    let welcomeMessage = "";
    let loginContainer = "";
    let errorInfo = "";

    if (error === true) {
      errorInfo = (
        <p class="login-info">Invalid email or password, try again</p>
      );
    }

    if (user.name === "") {
      welcomeMessage = "Welcome, please login to use the app";
    } else {
      welcomeMessage = "Hi " + user.name + ". What to do?";
    }

    if (user.name === "") {
      loginContainer = (
        <div>
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
              onClick={() =>
                this.props.handleLogInClick(
                  this.state.email,
                  this.state.password,
                )
              }
            >
              Log in
            </button>
            {errorInfo}
          </div>
        </div>
      );
    } else {
      loginContainer = "";
    }

    return (
      <div>
        <div className="navigation-bar">
          {loginContainer}
          <p className="info">{welcomeMessage}</p>

          <div className="navigation-container">
            <div className="logo-container">
              <p>Reminder</p>
              <img src={logo} alt="Logo"></img>
            </div>

            <ul>
              <li>
                <a href="/tasks">
                  <i className="flaticon flaticon-list" />
                  Tasks
                </a>
              </li>

              <li>
                <a href="/account">Account</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="" onClick={() => this.props.handleLogOutClick(token)}>
                  <i className="flaticon flaticon-logout" />
                  Log Out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Menu;
