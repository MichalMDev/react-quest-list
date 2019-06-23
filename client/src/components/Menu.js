import React from 'react';
// import '../text-area-resize.js';
import './Menu.css';

const Menu = () => {
	return (
		<nav class="nav">
			<div class="nav-container">
				<ul>
					<li>
						<a href="#">
							<i class="flaticon flaticon-list" />
							Tasks
						</a>
					</li>

					<li>
						<a href="#">
							<i class="flaticon flaticon-logout" />Log Out
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Menu;
