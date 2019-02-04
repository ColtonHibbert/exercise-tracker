import React from 'react';
import './home.css';
import SignForm from './SignForm';

const Home = (props) => {
	return (
			<div className="w-100 h-100 flex">
				<h1> Do You Even Lift</h1>
				{props.children};
			</div>
		);
}

export default Home;