import React from "react";

import Task from "./Task";

// const TaskList = (props) => {
// 	const tasks = props.tasks.map((task) => (
// 		<Task
// 			key={task.id}
// 			id={task.id}
// 			title={task.title}
// 			text={task.text}
// 			category={task.category}
// 			// handleEditTask={props.handleEditTask}
// 			handleDeleteClick={props.handleDeleteClick}
// 			handleEditClick={props.handleEditClick}
// 		/>
// 	));
const TaskList = (props) => {
  console.log("Task list ");
  console.log(props.tasks);

  props.tasks.sort(
    (a, b) =>
      new Date(b.creationDate).getTime() - new Date(a.creationDate).getTime(),
  );
  console.log("Task list - posortowane taski ");
  console.log(props.tasks);

  const tasks = props.tasks.map((task) => (
    <Task
      key={task.id}
      task={task}
      creationDate={props.creationDate}
      handleDeleteClick={props.handleDeleteClick}
      handleEditClick={props.handleEditClick}
      handleTaskDone={props.handleTaskDone}
      data={props.data}
    />
  ));

  return <div className="tasks-container">{tasks}</div>;
};

export default TaskList;
