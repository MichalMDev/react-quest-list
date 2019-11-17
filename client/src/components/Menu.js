import React from "react";
// import '../text-area-resize.js';
import "./Menu.css";

const Menu = (props) => {
  let { token, user } = props.data;

  let welcomeMessage = "";
  let loginContainer = "";

  if (user.name === "") {
    welcomeMessage = "Welcome, please login to use the app";
  } else {
    welcomeMessage = "Hi " + user.name + ". What to do?";
  }

  if (user.name !== "") {
    loginContainer = <p>Logged</p>;
  } else {
    loginContainer = (
      <div className="login-container">
        <input placeholder="email"></input>
        <input placeholder="password" type="password"></input>
        <button
          className="loginButton"
          onClick={() => props.handleLogInClick()}
        >
          Login
        </button>
      </div>
    );
  }

  return (
    <nav class="nav">
      <div class="nav-container">
        <ul>
          {loginContainer}
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
                onClick={() => props.handleLogOutClick(token)}
              />
              Log Out
            </a>
          </li>
        </ul>
      </div>
      <p class="navMessage">{welcomeMessage}</p>
    </nav>
  );
};

export default Menu;
