import React from 'react';
import './sidecontent.css';

const SideContent = (props) => {
	return (
		<div className="w-20 vh-25 flex ph1 bg-blue">
			<ul className="flex flex-column justify-around list ma0 pa0 pl0">
				<li className="flex list ma0 pl1 fsvw2">Create a Workout</li>
				<li className="flex list ma0 pl1 fsvw2">Manage Weekly Workouts</li>
				<li className="flex list ma0 pl1 fsvw2">View Tracked Stats</li>
			</ul>
		</div>
	);
}

export default SideContent;