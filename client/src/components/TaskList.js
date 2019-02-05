import React from 'react';

import Task from './Task';

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
	console.log(props.tasks);

	const tasks = props.tasks.map((task) => (
		<Task
			key={task.id}
			task={task}
			handleDeleteClick={props.handleDeleteClick}
			handleEditClick={props.handleEditClick}
		/>
	));

	return <div>{tasks}</div>;
};

export default TaskList;