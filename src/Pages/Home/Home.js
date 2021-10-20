import React from 'react';
import Banner from './Banner';
import DoctorsDemo from './DoctorsDemo';
import Overview from './Overview';
import Statistics from './Statistics';
import Steps from './Steps';

const Home = () => {
	return (
		<div className='space-y-10 md:space-y-20 lg:space-y-40 xl:space-y-52'>
			<Banner />
			<Steps />
			<Overview />
			<Statistics />
			<DoctorsDemo />
		</div>
	);
};

export default Home;
