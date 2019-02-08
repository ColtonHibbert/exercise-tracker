import React from 'react';

const CreateWorkout = (props) => {
	return (
		<div className="flex bg-gold w-100">
			{props.children}
		</div>
   		);
}

export default CreateWorkout;