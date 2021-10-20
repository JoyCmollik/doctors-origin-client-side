import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
	{
		imgPath: 'https://i.ibb.co/sRddLHM/hero-bg.png',
	},
	{
		imgPath: 'https://i.ibb.co/xX8WbWW/hero-bg3.png',
	},
	{
		imgPath: 'https://i.ibb.co/Hq9mPHS/hero-bg2.png',
	},
	{
		imgPath: 'https://i.ibb.co/tKkGmRB/hero-bg5.png',
	},
	{
		imgPath: 'https://i.ibb.co/PN9DYP2/hero-bg4.png',
	},
];

const Banner = () => {
	const theme = useTheme();
	const [activeStep, setActiveStep] = useState(0);

	const handleStepChange = (step) => {
		setActiveStep(step);
	};
	return (
		<div className='bg-light'>
			<div
				className='container mx-auto flex justify-center items-center'
				style={{ minHeight: 'calc(100vh - 68px)' }}
			>
				<div className='grid md:grid-cols-2 gap-8 place-items-center'>
					<div className='space-y-4 px-2 md:px-0'>
						<h1 className='text-3xl lg:text-5xl xl:text-6xl font-lora'>
							<span className='text-primary'>
								Find local specialists
							</span>{' '}
							<br /> who can take care <br />
							of your health
						</h1>
						<p className='w-11/12 text-gray-700'>
							We can help you find available doctor appointments
							near you or notify you when availability takes
							place.
						</p>
						<form className='w-10/12 p-1 rounded bg-white flex justify-between'>
							<input
								className='p-2 focus:outline-none text-gray-400 w-full focus-within:text-black'
								type='text'
								placeholder='search your doctor....'
								required
							/>
							<button
								className='bg-primary p-2 text-white rounded'
								type='submit'
							>
								<SearchIcon />
							</button>
						</form>
					</div>

					<Box sx={{ maxWidth: 500, flexGrow: 1, zIndex: 1 }}>
						<AutoPlaySwipeableViews
							axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
							index={activeStep}
							onChangeIndex={handleStepChange}
							enableMouseEvents
						>
							{images.map((step, index) => (
								<div key={index}>
									{Math.abs(activeStep - index) <= 2 ? (
										<Box
											component='img'
											sx={{
												display: 'block',
												objectFit: 'cover',
												overflow: 'hidden',
												width: '100%',
											}}
											src={step.imgPath}
											alt={step.label}
										/>
									) : null}
								</div>
							))}
						</AutoPlaySwipeableViews>
					</Box>
				</div>
			</div>
		</div>
	);
};

export default Banner;
