import React from 'react';

const HomeCenter = (props) => {
	return (
		<div className="w-100 vh-75 bg-red flex">
			{props.children}
		</div>
		);
}

export default HomeCenter;