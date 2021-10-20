import React from 'react';
import doctorImg from '../../images/doctor.jpg';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BtnPrimary from '../Shared/BtnPrimary';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Avatar } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { HashLink } from 'react-router-hash-link';

const Overview = () => {
	const description =
		'DoctorsPortal accepts most major health insurance plans and providers to ensure you get quality care at a cost that fits within your budget. And yes considering your situation we also offer medical discount as well.';

	function stringAvatar(name) {
		return {
			sx: {
				bgcolor: '#EBF1FF',
				color: '#5563F4',
				fontSize: 10,
				width: 31,
				height: 31,
			},
			children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
		};
	}

	return (
		<div className='container mx-auto'>
			<div className='grid lg:grid-cols-2 gap-5'>
				<div className='space-y-3 w-11/12 text-center lg:text-left'>
					{/* title */}
					<div>
						<p className='uppercase text-primary font-medium'>
							find doctors
						</p>
						<h2 className='text-2xl lg:text-4xl xl:text-5xl font-bold font-lora'>
							Consult a doctor anytime <br />
							anywhere by search
						</h2>
					</div>

					{/* info */}
					<p className='text-gray-500'>{description}</p>
					<div className='space-y-1 text-main'>
						<p>
							<CheckCircleIcon
								color='primary'
								size='small'
								sx={{ mr: 1 }}
							/>
							DoctorsPortal is easy to use and process
						</p>
						<p>
							<CheckCircleIcon
								color='primary'
								size='small'
								sx={{ mr: 1 }}
							/>
							Top-searched specialities
						</p>
					</div>
					<BtnPrimary endIcon={<ArrowRightAltIcon />}>
						See Specialities
					</BtnPrimary>
				</div>
				<div className='relative'>
					<img
						className='object-contain w-10/12 mx-auto lg:w-9/12 lg:ml-auto rounded-tl-3xl rounded-br-3xl'
						src={doctorImg}
						alt='doctor avatar'
					/>

					{/* absolute card */}
					<div className='hidden lg:block bg-white rounded p-4 shadow absolute left-8 -bottom-4 w-52 xl:w-72 xl:-bottom-10 xl:-left-4'>
						<div className='flex justify-between items-baseline'>
							<div className=''>
								<p className='text-main text-sm font-medium'>
									Available Doctors
								</p>
								<small className='text-gray-500'>
									Select doctors
								</small>
							</div>
							<p className='text-gray-500'>
								<MoreHorizIcon />
							</p>
						</div>
						<div className='p-2 rounded shadow w-full space-x-2 flex items-baseline'>
							<Avatar {...stringAvatar('Dr. Philip')} />
							<div>
								<small className='font-medium text-main'>
									Dr. Philip
								</small>
								<small className='block text-gray-400 text-xs uppercase'>
									<LocationOnIcon
										sx={{
											fontSize: '16px',
											marginRight: '1px',
										}}
									/>{' '}
									New York
								</small>
							</div>
						</div>
						<div className='p-2 rounded shadow w-full space-x-2 flex items-baseline'>
							<Avatar {...stringAvatar('Dr. Lauren')} />
							<div>
								<small className='font-medium text-main'>
									Dr. Lauren
								</small>
								<small className='block text-gray-400 text-xs uppercase'>
									<LocationOnIcon
										sx={{
											fontSize: '16px',
											marginRight: '1px',
										}}
									/>{' '}
									Sydney
								</small>
							</div>
						</div>
						<HashLink to='/home#doctors'>
							<button className='w-full p-1 text-xs font-medium mt-2 text-dark bg-light rounded'>
								Find Doctors
							</button>
						</HashLink>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Overview;
