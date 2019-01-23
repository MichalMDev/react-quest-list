import React, { Component } from 'react';

import './Quest.css';
const Quest = (props) => {
	return (
		<div className="quest-container">
			<h2>{props.title}</h2>
			<p>{props.text}</p>
		</div>
	);
};

export default Quest;
