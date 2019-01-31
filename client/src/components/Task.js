import React from 'react';

import './Task.css';
const Task = (props) => {
	return (
		<div className="task-container">
			<div className="task-content">
				<div className="category-circle" />
				<div>
					<h2 className="task-title">{props.title}</h2>
					<p className="task-text">{props.text}</p>
				</div>
			</div>
			<div className="buttons-container">
				<div className="button" onClick={handleDeleteClick(props.title)}>
					X
				</div>
				<div className="button" onClick={handleEditClick(props.title, props.text)}>
					Edit
				</div>
			</div>
		</div>
	);
};
const handleDeleteClick = (title) => {
	console.log('Trying to delete task: ' + title);
};
const handleEditClick = (title, text) => {
	console.log('Trying to edit task: ' + title, text);
};
export default Task;
