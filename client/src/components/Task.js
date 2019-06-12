import React from 'react';
// import '../text-area-resize.js';
import './Task.css';

const Task = (props) => {
	const { id, title, text, category, creationDate } = props.task;

	return (
		<div className="task-container">
			<div className="task-content">
				<div className="task-details-container">
					<input
						className="input"
						type="text"
						name="task-title"
						id={id}
						value={title}
						onChange={() => props.handleEditClick(id)}
					/>

					<p>
						{creationDate}, {category}
					</p>

					<textarea
						className="text-area"
						name="task-text"
						id=""
						cols="10"
						rows="2"
						value={text}
						onChange={() => props.handleEditClick(id)}
					/>
				</div>
				<div className="buttons-container">
					<div className="button" onClick={() => props.handleDeleteClick(id)}>
						X
					</div>
					<div className="button" onClick={() => props.handleEditClick(id)}>
						Edit
					</div>
				</div>
			</div>
		</div>
	);
};

export default Task;
