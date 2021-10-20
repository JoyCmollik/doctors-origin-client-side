import React from 'react';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import Location from './Location';
import useLocations from '../../hooks/useLocations';

const Locations = () => {
	const { locations } = useLocations();

	return (
		<div className='container mx-auto py-10 lg:py-20'>
			{/* title */}
			<div className='container mx-auto flex justify-between items-center text-main pb-10 lg:pb-20'>
				<div className='space-y-2'>
					<h2 className='text-2xl lg:text-4xl xl:text-5xl font-lora'>
						Browse Locations
					</h2>
					<p>
						See all the locations here to which we connect you
						worldwide
					</p>
				</div>
				<div className='hidden z-100 text-main lg:block bg-white p-5 rounded-br-3xl relative'>
					<p>We merged all the possible options</p>
					<h3 className='text2xl xl:text-3xl text-primary'>
						<span className='text-3xl xl:text-4xl font-medium mr-2'>
							400+
						</span>
						medicals
					</h3>
					<p className='absolute text-gray-200 -top-4 -left-16'>
						<GpsFixedIcon sx={{ fontSize: 80 }} />
					</p>
				</div>
			</div>
			{/* content */}
			<div className='grid grid-cols-1 space-y-4 lg:space-y-8 border rounded p-4 lg:p-8'>
				{locations &&
					locations.map((location) => (
						<Location key={location.loc_id} location={location} />
					))}
			</div>
		</div>
	);
};

export default Locations;
