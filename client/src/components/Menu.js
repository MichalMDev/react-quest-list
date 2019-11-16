import React from 'react';
// import '../text-area-resize.js';
import './Menu.css';

const Menu = () => {
	return (
		<nav class="nav">
			<div class="nav-container">
				<ul>
					<li>
						<a href="/tasks">
							<i class="flaticon flaticon-list" />
							Tasks
						</a>
					</li>
					<li>
						<a href="/about">
							<i class="" />About
						</a>
					</li>
					<li>
						<a href="/logout">
							<i class="flaticon flaticon-logout" />Log Out
						</a>
					</li>
				</ul>
			</div>
			<p class="navMessage">Hi Michał!</p>
		</nav>
	);
};

export default Menu;
