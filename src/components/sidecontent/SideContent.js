import React from 'react';

const SideContent = (props) => {
	return (
		<div className="h5 w-30 flex ph3 bg-blue">
			<ul className="flex flex-column justify-around list pl0">
				<li className="flex list pl0">Create a Workout</li>
				<li className="flex list pl0">Manage Weekly Workouts</li>
				<li className="flex list pl0">View Tracked Stats</li>
			</ul>
		</div>
	);
}

export default SideContent;