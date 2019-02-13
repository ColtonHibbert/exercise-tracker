import React from 'react';

const ExerciseCard = (props) => {
	return (
		<div className="w-100 flex flex-column">
			<div className="w-100">Exercise</div>
			<div className="w-100">Sets</div>
			<div className="w-100">Reps</div>
			<div className="w-100">Total Weight</div>
		</div>
		); 
}

export default ExerciseCard;