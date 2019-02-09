import React from 'react';

const ExercisesHeader = (props) => {
	return (
		<div>
			<div className="w-100 flex justify-center">Exercises</div>
			<div className="w-100 flex">
				<div className="w-40 flex flex-column bg-white">Exercise</div>
				<div className="w-30 flex flex-column bg-red">Goal</div>
				<div className="w-30 flex flex-column bg-gray">Actual</div>
			</div>
		</div>
		);
}

export default ExercisesHeader;