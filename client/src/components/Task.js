import React, { Component } from 'react';

import './Task.css';
import '../text-area-resize.js';

class Task extends Component {
	state = {
		id: 1,
		category: null,
		title: 'zadanie1',
		text: 'cos do zrobienia'
	};

	handleDeleteClick = () => {
		console.log('Trying to delete task: ' + this.state.title);
	};
	handleEditClick = () => {
		console.log('Trying to edit task: ' + this.state.title);
	};

	editTask = (e) => {
		if (e.target.name === 'task-title') {
			this.setState({
				title: e.target.value
			});
		}
		if (e.target.name === 'task-text') {
			this.setState({
				text: e.target.value
			});
		}
	};

	render() {
		return (
			<div className="task-container">
				<div className="task-content">
					<div className="category-circle" />

					<div>
						<input
							className="input"
							type="text"
							name="task-title"
							value={this.state.title}
							onChange={this.editTask}
						/>
						<textarea
							className="text-area"
							name="task-text"
							id=""
							cols="10"
							rows="2"
							value={this.state.text}
							onChange={this.editTask}
						/>
					</div>
				</div>
				<div className="buttons-container">
					<div className="button" onClick={this.handleDeleteClick}>
						X
					</div>
					<div className="button" onClick={this.handleEditClick}>
						Edit
					</div>
				</div>
			</div>
		);
	}
}

export default Task;
