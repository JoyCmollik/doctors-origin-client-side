import { Divider, Rating } from '@mui/material';
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
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import useLocations from '../../hooks/useLocations';
import Location from '../Locations/Location';

const DoctorInfo = () => {
	const { doctorId } = useParams();
	const { doctors } = useDoctors();
	let { path, url } = useRouteMatch();
	const { locations } = useLocations();
	const [doctor, setDoctor] = useState(null);
	const [expanded, setExpanded] = useState(false);
	const [value, setValue] = useState(new Date());
	const [locationList, setLocationList] = useState([]);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	useEffect(() => {
		if (doctors) {
			if (!doctor) {
				const doctorSearched = doctors.find(
					(doctor) => doctor.id === parseInt(doctorId)
				);
				setDoctor(doctorSearched);
			}
			if (locations) {
				let newList = [];
				locations.forEach((location) => {
					if (doctor?.dr_locations.indexOf(location.loc_id)) {
						newList.push(location);
					}
				});
				setLocationList(newList);
			}
		}
	}, [doctors, locations]);

	// local components
	const Locations = () => {
		return (
			<div className='grid grid-cols-1 space-y-4 lg:space-y-8 border rounded mt-4 p-4 lg:p-8'>
				{locationList &&
					locationList.map((location) => (
						<Location key={location.loc_id} location={location} />
					))}
			</div>
		);
	};

	const OtherInfo = () => {
		return (
			<div className='space-y-4'>
				{/* about */}
				<div className='space-y-2 py-4'>
					<h4 className='text-xl text-main'>
						About {doctor?.dr_name}
					</h4>
					<p className='text-gray-500'>
						{doctor?.dr_name} is a {doctor?.dr_desc}
					</p>
				</div>

				<Divider variant='middle' />

				{/* services */}
				<div className='space-y-2 py-4'>
					<h4 className='text-xl text-main'>Offered Services</h4>
					{doctor?.dr_services.map((serviceList, index) => (
						<Accordion
							key={index}
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
										serviceList?.list.map(
											(serviceItem, index) => (
												<div
													key={index}
													className='p-2 border rounded flex justify-between'
												>
													<p>{serviceItem.service}</p>
													<p>${serviceItem.price}</p>
												</div>
											)
										)}
								</div>
							</AccordionDetails>
						</Accordion>
					))}
				</div>

				<Divider variant='middle' />

				{/* education */}
				<div className='space-y-2 py-4'>
					<h4 className='text-xl text-main'>Education</h4>
					<div className='text-gray-500'>
						{doctor?.dr_education.map((education, index) => (
							<div
								key={index}
								className='p-2 text-xs md:text-base border rounded flex flex-wrap justify-between items-center'
							>
								<p>
									{education.subject}{' '}
									<span className='text-gray-400'>
										({education.year})
									</span>
								</p>
								<p className='text-gray-400'>
									{education.college}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		);
	};

	// returning main component

	return (
		<div className='bg-light py-10 lg:py-20'>
			<div className='container mx-auto grid grid-cols-12 gap-4'>
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
								Is a {doctor?.dr_desc.split('.', 1)}.
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
					<div className='border py-1'>
						<div className='rounded py-1 h-auto'>
							<NavLink
								className='px-8 py-2 border hover:bg-white hover:text-dark transition duration-100'
								activeClassName='bg-white text-dark'
								to={`${url}/more-info`}
							>
								Doctor Details
							</NavLink>
							<NavLink
								className='px-8 py-2 border hover:bg-white hover:text-dark transition duration-100'
								activeClassName='bg-white text-dark'
								to={`${url}/locations`}
							>
								Locations
							</NavLink>
						</div>
						<div className='px-4'>
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
				<div className='col-span-12 lg:col-span-4 bg-white rounded overflow-hidden space-y-4 shadow'>
					{/* title */}
					<div className='w-full p-2 bg-main'>
						<h4 className='text-xl text-light font-medium text-center'>
							Book a Visit
						</h4>
						<p className='text-gray-200 text-center'>
							{doctor?.dr_available_days}
						</p>
					</div>
					<div className='px-4 text-center'>
						{/* date & time picker */}
						<LocalizationProvider dateAdapter={AdapterDateFns}>
							<DateTimePicker
								renderInput={(props) => (
									<TextField {...props} />
								)}
								label='Pick Your Time Here'
								value={value}
								onChange={(newValue) => {
									setValue(newValue);
								}}
								minDate={new Date('2020-02-14')}
								minTime={new Date(0, 0, 0, 8)}
								maxTime={new Date(0, 0, 0, 18, 45)}
							/>
						</LocalizationProvider>
					</div>
					<div className='border rounded shadow mx-2'>
						<div className='p-4'>
							{doctor?.dr_services?.map((serviceList, index) => (
								<div className='p-2' key={index}>
									<div>
										<h2 className='text-main text-xl capitalize'>
											{serviceList?.name}
										</h2>
									</div>
									<div>
										<div className='py-2 space-y-2 text-gray-500'>
											{doctor &&
												serviceList?.list.map(
													(serviceItem, index) => (
														<div
															key={index}
															className='p-2 border rounded flex justify-between'
														>
															<p>
																{
																	serviceItem.service
																}
															</p>
															<p>
																$
																{
																	serviceItem.price
																}
															</p>
														</div>
													)
												)}
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
					<div className='p-2'>
						<BtnPrimary
							size='large'
							sx={{ background: '#0E63F4', width: '100%' }}
						>
							Proceed to checkout
						</BtnPrimary>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DoctorInfo;
