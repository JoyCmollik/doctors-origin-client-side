import React from 'react';
import Banner from './Banner';
import DoctorsDemo from './DoctorsDemo';

const Home = () => {
	return (
		<div className='pb-10 md:pb-20 space-y-10 md:space-y-20'>
			<Banner />
			<DoctorsDemo />
		</div>
	);
};

export default Home;
