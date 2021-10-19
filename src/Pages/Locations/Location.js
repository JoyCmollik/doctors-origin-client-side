import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BtnPrimary from '../Shared/BtnPrimary';

const Location = (props) => {
	const { img, name, moto, tags, region, days, doctors_onboard } =
		props.location;
	return (
		<div className='bg-white rounded grid grid-cols-12 gap-4 p-4 border border-gray-100'>
			{/* left side */}
			<div className='col-span-12 md:col-span-8 space-y-4'>
				<div className='flex justify-between space-x-2'>
					<div className='border-4 border-gray-200 rounded shadow'>
						<img
							className='object-contain rounded'
							src={img}
							alt={name}
						/>
					</div>
					<div className='w-full p-2'>
						<h2 className='text-xl text-main font-medium mb-1'>
							{name}
						</h2>
						<p className='text-gray-500'>{moto}</p>
					</div>
				</div>
				<div className='flex flex-wrap'>
					{tags.map((tag, index) => (
						<p className='px-2 bg-light text-dark mr-2 mb-2'>
							{tag}
						</p>
					))}
				</div>
			</div>
			{/* right side */}
			<div className='col-span-12 pl-4 md:col-span-4 md:border-l-2 md:border-gray-200 space-y-2'>
				<p className='text-gray-500'>
					<span className='mr-2'>
						<LocationOnIcon size='small' />
					</span>
					{region}
				</p>
				<p className='text-gray-500'>
					<span className='mr-2'>
						<LocationOnIcon size='small' />
					</span>
					{days}
				</p>
				<p className='text-gray-500'>
					<span className='mr-2'>
						<LocationOnIcon size='small' />
					</span>
					Doctors Onboard: {doctors_onboard}
				</p>
				<p className='text-gray-500 mb-4'>
					<span className='mr-2'>
						<LocationOnIcon size='small' />
					</span>
					24/7 Available
				</p>
				<BtnPrimary variant='outlined' sx={{ color: '#0E63F4' }}>
					View More
				</BtnPrimary>
			</div>
		</div>
	);
};

export default Location;
