import { Rating } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams, useRouteMatch } from 'react-router';
import { NavLink } from 'react-router-dom';
import useDoctors from '../../hooks/useDoctors';
import BtnPrimary from '../Shared/BtnPrimary';
import PrivateRoute from '../Shared/PrivateRoute';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const DoctorInfo = () => {
	const { doctorId } = useParams();
	const { doctors } = useDoctors();
	const [doctor, setDoctor] = useState();
	let { path, url } = useRouteMatch();
	const [expanded, setExpanded] = useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	useEffect(() => {
		if (doctors) {
			const doctorSearched = doctors.find(
				(doctor) => doctor.id === parseInt(doctorId)
			);
			setDoctor(doctorSearched);
		}
	}, [doctors]);

	console.log(doctor);

	// local components
	const Locations = () => {
		return <h4>this locations</h4>;
	};

	const OtherInfo = () => {
		return (
			<div>
				<div className='space-y-2 py-4'>
					<h4 className='text-xl text-main'>
						About {doctor?.dr_name}
					</h4>
					<p className='text-gray-500'>{doctor?.dr_desc}</p>
				</div>
				<div className='space-y-2 py-4 transition'>
					<h4 className='text-xl text-main'>Offered Services</h4>
					{doctor?.dr_services.map((serviceList, index) => (
						<Accordion
							sx={{
								boxShadow: 'none',
							}}
							expanded={expanded === index}
							onChange={handleChange(index)}
						>
							<AccordionSummary
								expandIcon={
									expanded === index ? (
										<RemoveCircleOutlineIcon
											sx={{ color: 'red' }}
										/>
									) : (
										<ControlPointIcon
											sx={{ color: '#0E63F4' }}
										/>
									)
								}
							>
								<h2 className='text-main text-xl capitalize'>
									{serviceList?.name}
								</h2>
							</AccordionSummary>
							<AccordionDetails>
								<div className='py-2 space-y-2 text-gray-500'>
									{doctor &&
										serviceList?.list.map((serviceItem) => (
											<div className='p-2 border rounded flex justify-between'>
												<p>{serviceItem.service}</p>
												<p>${serviceItem.price}</p>
											</div>
										))}
								</div>
							</AccordionDetails>
						</Accordion>
					))}
				</div>
			</div>
		);
	};

	// returning main component

	return (
		<div className='bg-light py-10 lg:py-20'>
			<div className='container mx-auto grid grid-cols-12'>
				{/* left side */}
				<div className='col-span-12 lg:col-span-8 space-y-10'>
					{/* doctor introduction */}
					<div className='grid grid-cols-12 gap-5'>
						<div className='col-span-12 md:col-span-4 border-4 border-gray-200 rounded'>
							<img
								className='object-contain rounded'
								src={doctor?.dr_avatar}
								alt={doctor?.dr_name}
							/>
						</div>
						<div className='col-span-12 md:col-span-8 space-y-1 p-4'>
							<h4 className='text-xl font-medium text-main'>
								{doctor?.dr_name}
							</h4>
							<p className='text-sm text-gray-400'>MBBS, FCPS</p>
							<div className='flex items-center'>
								<Rating
									name='read-only'
									value={doctor?.dr_rating || 0}
									readOnly
									precision={0.5}
									size='small'
								/>
								<span className='text-gray-400 ml-1'>
									({doctor?.dr_rating_counts} feedbacks)
								</span>
							</div>
							<p className='text-main'>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Doloribus, nam!
							</p>
							<BtnPrimary
								variant='outlined'
								sx={{ color: '#1565C0' }}
							>
								Add Feedback
							</BtnPrimary>
						</div>
					</div>
					{/* other info */}
					<div>
						<div className='rounded'>
							<NavLink to={`${url}/locations`}>locations</NavLink>
							<NavLink to={`${url}/more-info`}>
								Doctor Details
							</NavLink>
						</div>
						<div className=''>
							<PrivateRoute exact path={path}>
								<OtherInfo />
							</PrivateRoute>
							<PrivateRoute path={`${path}/locations`}>
								<Locations />
							</PrivateRoute>
							<PrivateRoute path={`${path}/more-info`}>
								<OtherInfo />
							</PrivateRoute>
						</div>
					</div>
				</div>
				{/* right side */}
				<div className='col-span-12 lg:col-span-4'></div>
			</div>
		</div>
	);
};

export default DoctorInfo;
