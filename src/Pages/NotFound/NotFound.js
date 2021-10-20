import React from 'react';
import { Link } from 'react-router-dom';
import BtnPrimary from '../Shared/BtnPrimary';
import errorImg from '../../images/error.png';

const NotFound = () => {
	return (
		<div className='container mx-auto py-10 lg:py-20'>
			<div className='flex flex-col justify-center items-center'>
				<div className='text-center space-y-4'>
					<img
						className='object-cover'
						src={errorImg}
						alt='error icons'
						style={{ maxWidth: '500px' }}
					/>
					<Link to='/home'>
						<BtnPrimary to='/home'>Go Back To Home</BtnPrimary>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
