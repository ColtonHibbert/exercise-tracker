import React from 'react';

const MainContent = (props) => {
	return (
		<div className="w-100 flex bg-gray">
		{props.children}
		</div>
		);
}

export default MainContent;