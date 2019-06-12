/* eslint-disable no-fallthrough */
/* eslint-disable default-case */
import React, { Component } from 'react';

import './AddTask.css';

class AddTask extends Component {
	state = {
		id: 22,
		text: '',
		title: '',
		category: '',
		creationDate: this.date
	};
	handleChange = (e) => {
		switch (e.target.name) {
			case 'task-title':
				this.setState({
					title: e.target.value
				});
				break;

			case 'task-text':
				this.setState({
					text: e.target.value
				});
				break;
			case 'category':
				this.setState({
					category: e.target.value
				});
				break;
		}
	};
	handleAddTask = () => {
		const { title, text, category } = this.state;
		if (text.length > 3) {
			const add = this.props.handleAddTask(title, text, category);
			if (add) {
				this.setState({
					id: null,
					text: '',
					title: '',
					category: ''
				});
			} else {
				alert('Za króka notatka');
			}
		}
	};
	render() {
		const { text, title } = this.state;
		return (
			<div className="addTask-container">
				<div className="addTask-form">
					<input
						className="input"
						type="text"
						name="task-title"
						placeholder="Task title"
						value={title}
						onChange={this.handleChange}
					/>
					<textarea
						className="text-area"
						name="task-text"
						id=""
						cols="10"
						rows="2"
						placeholder="Enter task"
						value={text}
						onChange={this.handleChange}
					/>
					<select name="category" id="" onChange={this.handleChange}>
						<option value="shopping" />
						<option value="shopping">shopping</option>
						<option value="work">work</option>
						<option value="hobby">hobby</option>
					</select>
					<button className="button" onClick={this.handleAddTask}>
						Add Task
					</button>
				</div>
			</div>
		);
	}
}

export default AddTask;
