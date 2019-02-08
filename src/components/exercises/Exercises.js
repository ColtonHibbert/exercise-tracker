import React from 'react';

const Exercises = (props) => {
	return (
		<div className="w-50 bg-orange">
		{props.children}
		</div>
		);
}

export default Exercises;