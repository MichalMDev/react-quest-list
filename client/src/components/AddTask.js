import React from 'react';

// import './AddTask.css';

const AddTask = (props) => {
	let id, title, text, category, creationDate;
	creationDate = new Date();

	return (
		<form>
			<input className="input" type="text" name="task-title" placeholder="Task title" id={id} value={id} />
			<textarea className="text-area" name="task-text" id="" cols="10" rows="2" value={text} />
			<select name="category" id="">
				<option value="shopping">shopping</option>
				<option value="work">work</option>
			</select>
			<button onSubmit={() => props.handleAddTask(id, title, text, category, creationDate)}>Add Task</button>
		</form>
	);
};

export default AddTask;
