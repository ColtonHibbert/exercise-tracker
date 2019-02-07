import React from 'react';

const Nav = (props) => {
	return (
		<div className="w-100 flex justify-end"> 
			{props.children}
		</div>
		);
}

export default Nav;