import React from 'react';
import icon1 from '../../images/icons/step1.png';
import icon2 from '../../images/icons/step2.png';
import icon3 from '../../images/icons/step3.png';
import icon4 from '../../images/icons/step4.png';

const Steps = () => {
	const steps = [
		{
			icon: icon1,
			title: 'Search Doctor',
			desc: 'We are here to help whenever you feel ill, but keeping you healthy is out better priority',
		},
		{
			icon: icon2,
			title: 'Check Doctor Profile',
			desc: 'We can help you find available vaccine appointments near you or notify you when available',
		},
		{
			icon: icon3,
			title: 'Schdule Appointment',
			desc: 'From seasonal allergies to burn identification and treatments near you, we have the resources',
		},
		{
			icon: icon4,
			title: 'Get Your Solutions',
			desc: 'We are bound to serve you as we promise to find you the best doctor to provide you with best result possible',
		},
	];

	const Step = (props) => {
		const { icon, title, desc } = props.step;
		return (
			<div className='space-y-3 text-center'>
				<img
					className='w-20 object-contain mx-auto'
					src={icon}
					alt={title}
				/>
				<h4 className='text-lg font-medium text-main'>{title}</h4>
				<p className='text-gray-500'>{desc}</p>
			</div>
		);
	};

	return (
		<div className='container mx-auto space-y-20'>
			{/* title */}
			<div className='text-center'>
				<p className='uppercase text-primary font-medium'>
					fastest solution
				</p>
				<h2 className='text-2xl lg:text-4xl xl:text-5xl font-bold font-lora'>
					4 easy steps to get your solution
				</h2>
			</div>
			<div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
				{steps.map((step, index) => (
					<Step key={index} step={step} />
				))}
			</div>
		</div>
	);
};

export default Steps;
