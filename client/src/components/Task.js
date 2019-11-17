import React from "react";
// import '../text-area-resize.js';
import "./Task.css";

const Task = (props) => {
  let { _id, title, text, category, creationDate } = props.task;
  let { token } = props.data;

  let year = new Date(creationDate).getFullYear();
  let month = new Date(creationDate).getUTCMonth() + 1;
  if (month < 10) {
    month = "0" + month;
  }
  let day = new Date(creationDate).getDate();
  let hours = new Date(creationDate).getHours();
  let minutes = new Date(creationDate).getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  let data = year + "-" + month + "-" + day + ", " + hours + ":" + minutes;

  if (category === "none") {
    category = "";
  } else {
    category = ", " + category;
  }

  return (
    <div className="task-container">
      <div className="task-content">
        <div className="task-details-container">
          <input
            className="input"
            type="text"
            name="task-title"
            id={_id}
            value={title}
          />

          <p>
            {data}
            {category}
          </p>

          {/* <textarea className="text-area" name="task-text" id="" cols="10" rows="2" value={text} /> */}
          <div className="text-area">{text}</div>
        </div>
        <div className="buttons-container">
          <div
            className="button"
            onClick={() => props.handleDeleteClick(token, _id)}
          >
            <i className="flaticon flaticon-delete" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
