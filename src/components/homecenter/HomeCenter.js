import React from 'react';

const HomeCenter = (props) => {
	return (
		<div className="w-100  flex">
			{props.children}
		</div>
		);
}

export default HomeCenter;