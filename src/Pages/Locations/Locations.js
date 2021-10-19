import React from 'react';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import Location from './Location';

const Locations = () => {
	const locations = [
		{
			img: 'http://amentotech.com/projects/doctreat/wp-content/uploads/2019/11/09-1-100x100.jpg',
			name: 'Sacred Sprash Care',
			moto: "We're in this together",
			tags: [
				'Adolescent medicine',
				'Aerospace medicine',
				'Anatomical Pathology',
				'Anesthesiology',
			],
			region: 'United Emirates',
			days: 'Mon, Tue, Thus, Fri, Sun',
			doctors_onboard: '7',
		},
		{
			img: 'http://amentotech.com/projects/doctreat/wp-content/uploads/2019/11/09-1-100x100.jpg',
			name: 'Sacred Sprash Care',
			moto: "We're in this together",
			tags: [
				'Adolescent medicine',
				'Aerospace medicine',
				'Anatomical Pathology',
				'Anesthesiology',
			],
			region: 'United Emirates',
			days: 'Mon, Tue, Thus, Fri, Sun',
			doctors_onboard: '7',
		},
		{
			img: 'http://amentotech.com/projects/doctreat/wp-content/uploads/2019/11/09-1-100x100.jpg',
			name: 'Sacred Sprash Care',
			moto: "We're in this together",
			tags: [
				'Adolescent medicine',
				'Aerospace medicine',
				'Anatomical Pathology',
				'Anesthesiology',
			],
			region: 'United Emirates',
			days: 'Mon, Tue, Thus, Fri, Sun',
			doctors_onboard: '7',
		},
		{
			img: 'http://amentotech.com/projects/doctreat/wp-content/uploads/2019/11/09-1-100x100.jpg',
			name: 'Sacred Sprash Care',
			moto: "We're in this together",
			tags: [
				'Adolescent medicine',
				'Aerospace medicine',
				'Anatomical Pathology',
				'Anesthesiology',
			],
			region: 'United Emirates',
			days: 'Mon, Tue, Thus, Fri, Sun',
			doctors_onboard: '7',
		},
		{
			img: 'http://amentotech.com/projects/doctreat/wp-content/uploads/2019/11/09-1-100x100.jpg',
			name: 'Sacred Sprash Care',
			moto: "We're in this together",
			tags: [
				'Adolescent medicine',
				'Aerospace medicine',
				'Anatomical Pathology',
				'Anesthesiology',
			],
			region: 'United Emirates',
			days: 'Mon, Tue, Thus, Fri, Sun',
			doctors_onboard: '7',
		},
	];

	return (
		<div className='container mx-auto py-10 lg:py-20'>
			{/* title */}
			<div className='container mx-auto flex justify-between items-center text-main pb-10 lg:pb-20'>
				<div className='space-y-2'>
					<h2 className='text-2xl lg:text-4xl xl:text-5xl font-bold'>
						Browse Questions.
					</h2>
					<p>
						Look for those answers for which you get confused often.
					</p>
				</div>
				<div className='hidden z-100 text-main lg:block bg-white p-5 rounded-br-3xl relative'>
					<p>We have answered as you asked</p>
					<h3 className='text2xl xl:text-3xl text-primary'>
						<span className='text-3xl xl:text-4xl font-medium mr-2'>
							100+
						</span>
						answers
					</h3>
					<p className='absolute text-gray-200 -top-4 -left-16'>
						<GpsFixedIcon sx={{ fontSize: 80 }} />
					</p>
				</div>
			</div>
			{/* content */}
			<div className='grid grid-cols-1 gap-4 border'>
				{locations.map((location, index) => (
					<Location key='index' location={location} />
				))}
			</div>
		</div>
	);
};

export default Locations;
