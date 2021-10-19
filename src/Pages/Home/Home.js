import React from 'react';
import Banner from './Banner';
import DoctorsDemo from './DoctorsDemo';
import Statistics from './Statistics';
import Steps from './Steps';

const Home = () => {
	return (
		<div className='pb-10 md:pb-20 space-y-10 md:space-y-20'>
			<Banner />
			<Steps />
			<Statistics />
			<DoctorsDemo />
		</div>
	);
};

export default Home;
