import React from 'react';
import { Link } from 'react-router-dom';
import BtnPrimary from '../Shared/BtnPrimary';

const NotFound = () => {
	return (
		<div className='container mx-auto'>
			<div className='flex flex-col justify-center items-center'>
				<h4>found no page here</h4>
				<Link to='/home'>
					<BtnPrimary to='/home'>Go Back To Home</BtnPrimary>
				</Link>
			</div>
		</div>
	);
};

export default NotFound;
