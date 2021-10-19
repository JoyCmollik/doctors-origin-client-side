import React from 'react';
import { Avatar } from '@mui/material';
import TodayOutlinedIcon from '@mui/icons-material/TodayOutlined';
import PhoneIcon from '@mui/icons-material/Phone';
import { useHistory } from 'react-router-dom';

const DoctorCard = (props) => {
	const { id, dr_name, dr_avatar, dr_field, dr_rating, dr_education_short } =
		props.doctor;
	const history = useHistory();

	return (
		<div className='bg-white w-full text-center space-y-5 shadow-sm h-full flex flex-col justify-between pt-4 rounded-lg'>
			<div className='space-y-2 px-8 py-4'>
				<Avatar
					alt={dr_name}
					src={dr_avatar}
					sx={{ width: 90, height: 90, margin: 'auto' }}
				/>
				<h4 className='text-lg font-medium text-main'>{dr_name}</h4>
				<p className='text-sm text-gray-400'>{dr_education_short}</p>
				<p className='py-2 mx-auto w-2/4 text-sm font-medium bg-light text-dark rounded'>
					{dr_field}
				</p>
			</div>

			<div className='w-full border-t flex justify-center text-gray-400 text-sm'>
				<button className='w-full py-2 border-r'>
					<span className='mr-2'>
						<TodayOutlinedIcon />
					</span>
					Availability
				</button>
				<button
					className='w-full py-2'
					onClick={() => {
						history.push(`/info/${id}`);
					}}
				>
					<span className='mr-2'>
						<PhoneIcon />
					</span>
					Book Now
				</button>
			</div>
		</div>
	);
};

export default DoctorCard;
