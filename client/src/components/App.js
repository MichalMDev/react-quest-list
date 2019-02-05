import React, { Component } from 'react';
import TaskList from './TaskList';
import AddTask from './AddTask';
import Task from './Task';

import './App.css';

class App extends Component {
	state = {
		data: null,
		tasks: [
			{
				id: 0,
				title: 'Tytul0',
				text: 'tekst0',
				category: 'kategoria0',
				date: null
			},
			{
				id: 1,
				title: 'Tytul1',
				text: 'tekst1',
				category: 'kategoria1',
				date: null
			},
			{
				id: 3,
				title: 'Tytul3',
				text: 'tekst3',
				category: 'kategoria3',
				date: null
			}
		]
	};

	componentDidMount() {
		// Call our fetch function below once the component mounts
		// this.getTasks().then((res) => this.setState({ data: res.express })).catch((err) => console.log(err));
		// this.callBackendTasks1().then((res) => this.setState({ data: res.express })).catch((err) => console.log(err));
	}
	componentDidUpdate() {
		console.log('Edycja App js');
	}
	getTasks = async () => {
		const response = await fetch('/tasks');
		const body = await response.json();

		if (response.status !== 200) {
			throw Error(body.message);
		}
		return body;
	};

	handleAddTask = (e, id, title, text, category, creationDate) => {
		console.log('Dodajemy nowy elem');
	};

	handleDeleteClick = (id) => {
		console.log('usuwam' + id);
		let tasks = this.state.tasks.filter((task) => task.id !== id);

		this.setState({
			tasks
		});
	};

	handleEditClick = (id) => {
		console.log('Trying to edit task: ' + id);
	};

	handleeditTask = (id, e) => {
		console.log('Dzialam editTask');

		console.log(this.state.tasks[id].title);
		// if (e.target.name === 'task-title') {
		// 	this.setState({
		// 		title: e.target.value
		// 	});
		// 	// }
		// 	// if (e.target.name === 'task-text') {
		// 	// 	this.setState({
		// 	// 		text: e.target.value
		// 	// 	});
		// 	// }
		// }
	};

	// callBackendTasks1 = async () => {
	// 	const response = await fetch('/tasks1');
	// 	const body = await response.json();

	// 	if (response.status !== 200) {
	// 		throw Error(body.message);
	// 	}
	// 	return body;
	// };

	render() {
		console.log(this.state.tasks);

		return (
			<div>
				<AddTask handleAddTask={this.handleAddTask} />
				<TaskList
					tasks={this.state.tasks}
					handleDeleteClick={this.handleDeleteClick}
					handleEditClick={this.handleEditClick}
				/>
			</div>
		);

		// <p className="App-intro">{this.state.data}</p>
	}
}

export default App;
