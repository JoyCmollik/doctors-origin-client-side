import React from 'react';

const Steps = () => {
	const steps = [
		{
			title: 'Search Doctor',
			desc: 'We are here to help whenever you feel ill, but keeping you healthy is out better priority',
		},
		{
			title: 'Check Doctor Profile',
			desc: 'We can help you find available vaccine appointments near you or notify you when available',
		},
		{
			title: 'Schdule Appointment',
			desc: 'From seasonal allergies to burn identification and treatments near you, we have the resources',
		},
		{
			title: 'Get Your Solutions',
			desc: 'We are bound to serve you as we promise to find you the best doctor to provide you with best result in the field always',
		},
	];

	return (
		<section className='text-gray-600 body-font'>
			<div className='container px-5 py-24 mx-auto'>
				{/* title */}
				<div className='text-center mb-20'>
					<h1 className='sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4'>
						4 easy steps to get your solution
					</h1>
					<p className='text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s'>
						Fastest solution
					</p>
					<div className='flex mt-6 justify-center'>
						<div className='w-16 h-1 rounded-full bg-dark inline-flex' />
					</div>
				</div>
				{/* content */}
				<div className='flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6'>
					{steps.map((step, index) => (
						<div
							key={index}
							className='p-4 md:w-1/3 flex flex-col text-center items-center'
						>
							<div className='w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-100 text-dark mb-5 flex-shrink-0'>
								<svg
									fill='none'
									stroke='currentColor'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									className='w-10 h-10'
									viewBox='0 0 24 24'
								>
									<path d='M22 12h-4l-3 9L9 3l-3 9H2' />
								</svg>
							</div>
							<div className='flex-grow'>
								<h2 className='text-gray-900 text-lg title-font font-medium mb-3'>
									{step.title}
								</h2>
								<p className='leading-relaxed text-base'>
									{step.desc}
								</p>
								<a className='mt-3 text-dark inline-flex items-center'>
									Learn More
									<svg
										fill='none'
										stroke='currentColor'
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										className='w-4 h-4 ml-2'
										viewBox='0 0 24 24'
									>
										<path d='M5 12h14M12 5l7 7-7 7' />
									</svg>
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Steps;
