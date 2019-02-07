import React from 'react';	
import './homeheader.css';


const HomeHeader = (props) => {
	return (
			<div className="w-100 vh15 bg-green"> 
				{props.children}
			</div>
		);
}

export default HomeHeader;