import React from 'react';

const CreateWorkoutHeader = (props) => {
	return (
		<div className="w-100 bg-white flex justify-center relative mb2">
			<div className="flex bg-yellow">Create A Workout</div>
			 {props.children}
		</div>
		);
}

export default CreateWorkoutHeader;