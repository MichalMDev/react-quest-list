import React, { Component } from 'react';
import Task from './Task';

import './App.css';

class App extends Component {
	state = {
		data: null
	};

	componentDidMount() {
		// Call our fetch function below once the component mounts
		this.getTasks().then((res) => this.setState({ data: res.express })).catch((err) => console.log(err));
		this.callBackendTasks1().then((res) => this.setState({ data: res.express })).catch((err) => console.log(err));
	}
	getTasks = async () => {
		const response = await fetch('/tasks');
		const body = await response.json();

		if (response.status !== 200) {
			throw Error(body.message);
		}
		return body;
	};
	callBackendTasks1 = async () => {
		const response = await fetch('/tasks1');
		const body = await response.json();

		if (response.status !== 200) {
			throw Error(body.message);
		}
		return body;
	};

	render() {
		return (
			<div>
				<p>Quest</p>
				<Task title="Zakupy" text="Dwa jabłka, i gruszka" />
				<p className="App-intro">{this.state.data}</p>
			</div>
		);
	}
}

export default App;
