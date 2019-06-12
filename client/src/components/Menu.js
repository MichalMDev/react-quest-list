import React from 'react';
// import '../text-area-resize.js';
import './Menu.css';

const Menu = () => {
	return (
		<nav class="nav">
			<div class="nav-container">
				<ul>
					<li>
						<a href="#">Tasks</a>
					</li>

					<li>
						<a href="#">Log Out</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Menu;
