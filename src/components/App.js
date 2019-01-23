import React, { Component } from 'react';
import Quest from './Quest';

import './App.css';

class App extends Component {
	render() {
		return (
			<div>
				<p>Quest</p>
				<Quest title="Zakupy" text="Dwa jabłka, i gruszka" />
			</div>
		);
	}
}

export default App;
