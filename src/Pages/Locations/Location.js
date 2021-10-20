import React from 'react';
import BtnPrimary from '../Shared/BtnPrimary';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const Location = (props) => {
	const { img, name, moto, tags, region, days, doctors_onboard } =
		props.location;
	return (
		<div className='bg-white shadow rounded grid grid-cols-12 gap-4 p-4 border'>
			{/* left side */}
			<div className='col-span-12 md:col-span-8 space-y-4'>
				<div className='grid md:grid-cols-12 space-x-2'>
					<div className='h-auto col-span-12 md:col-span-4 border-4 overflow-hidden border-gray-200  rounded shadow'>
						<img
							className='h-44 w-full object-cover rounded'
							src={img}
							alt={name}
						/>
					</div>
					<div className='w-full col-span-12 md:col-span-8 p-2'>
						<h2 className='text-xl text-main font-medium mb-1'>
							{name}
						</h2>
						<p className='text-gray-500'>{moto}</p>
					</div>
				</div>
				<div className='flex flex-wrap'>
					{tags.map((tag, index) => (
						<p
							key={index}
							className='px-2 bg-light text-dark mr-2 mb-2'
						>
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
						<AccessAlarmIcon size='small' />
					</span>
					{days}
				</p>
				<p className='text-gray-500'>
					<span className='mr-2'>
						<LocalHospitalIcon size='small' />
					</span>
					Doctors Onboard: {doctors_onboard}
				</p>
				<p className='text-gray-500 mb-4'>
					<span className='mr-2'>
						<CheckBoxIcon size='small' />
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
