import React, { useEffect, useState } from 'react';
import DoctorCard from './DoctorCard';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import useDoctors from '../../hooks/useDoctors';

const DoctorsDemo = () => {
	const { doctors } = useDoctors();

	return (
		<div className='bg-white pt-10 lg:pt-20' id='doctors'>
			{/* title */}
			<div className='container mx-auto flex justify-between items-center text-main pb-10 lg:pb-20'>
				<div className='space-y-2'>
					<h2 className='text-2xl lg:text-4xl xl:text-5xl font-bold'>
						Browse doctors.
					</h2>
					<p>Easily book a doctor according to your preferences.</p>
				</div>
				<div className='hidden z-100 text-main lg:block bg-light p-5 rounded-br-3xl relative'>
					<p>We have served many patients</p>
					<h3 className='text2xl xl:text-3xl text-primary'>
						<span className='text-3xl xl:text-4xl font-medium mr-2'>
							5000+
						</span>
						patients
					</h3>
					<p className='absolute text-gray-200 -top-4 -left-16'>
						<PersonAddOutlinedIcon sx={{ fontSize: 80 }} />
					</p>
				</div>
			</div>
			{/* content */}
			<div className='bg-light py-10'>
				<div className='container px-2 md:px-0 mx-auto grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 place-items-center gap-4 xl:gap-5'>
					{doctors &&
						doctors.map((doctor) => (
							<DoctorCard key={doctor.id} doctor={doctor} />
						))}
				</div>
			</div>
		</div>
	);
};

export default DoctorsDemo;
