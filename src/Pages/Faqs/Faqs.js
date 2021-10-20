import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import { TextField } from '@mui/material';
import BtnPrimary from '../Shared/BtnPrimary';

const Faqs = () => {
	const [expanded, setExpanded] = useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	const faqList = [
		{
			ques: 'What are the different treatment options?',
			answer: 'Gone are the days when a doctor simply chooses the best course of action and dictates this choice to the patient, Epperly says. “It really should be a shared decision-making process,” he says. “My job is to inform my patients of their options, and then we sort it out together.” To ensure that conversation happens, you may have to ask your doctor about your alternatives.',
		},
		{
			ques: 'What outcome should I expect?',
			answer: 'You may assume your life will return to normal following a surgery or other treatment protocol, for instance, but your doctor may know the best possible outcome is a small improvement in one or two of your symptoms. If you knew what your doctor knows, that might change your decision to go through with a treatment, Boissy says. “So it’s very important to ask what type of medical and symptomatic outcomes you can expect.”',
		},
		{
			ques: 'Do we have to do this now, or can we revisit it later?',
			answer: 'Doctors almost always have too much to do and too little time in which to do it. So when they meet with a patient, there’s the temptation to be as thorough as possible with tests or treatments. But sometimes certain tests or therapies can wait, Boissy says. Asking, “Is this necessary now?” can help your doctor stop and consider if what he or she is suggesting is required right away, or if it can wait a while.',
		},
		{
			ques: 'Is there anything I can do on my own to improve my condition?',
			answer: 'Lifestyle choices like what you eat, how much you move or sleep, and whether you smoke account for 70% of your risk for illness and disease, says Dr. Rob Danoff, a doctor of osteopathic medicine and a certified family physician with Philadelphia’s Aria Health System. They also play a huge role in helping you recover from an existing condition.',
		},
		{
			ques: 'What are the side effects?',
			answer: '“There’s always the possibility that what I do with medications could hurt a patient,” Epperly says. Whether that hurt comes in the form of headaches or skin rashes or mouth blisters, those sorts of side effects are common—and are things patients should hear about from their doctors beforehand so they go into a course of treatment with eyes wide open, he says.',
		},
		{
			ques: 'How will I hear about my test results?',
			answer: 'Boissy calls it an age old problem: A patient undergoes an MRI or blood work, and then finds herself at home without any idea when or how she’ll hear from her doctor about her results. “The anxiety of waiting around and staring into the dark abyss of uncertainty is terrible,” Boissy says. Hopefully your doctor will be explicit about how you’ll get your results. But if not, you should ask.',
		},
		{
			ques: 'Should I get a second opinion?',
			answer: 'Depending on a doctor’s area of expertise, his or her insights into your symptoms and their causes may be very different from another doc’s. For this reason, seeking a second opinion is always prudent, Dr. Danoff says. A good primary care physician will point you to the right specialist. It may cost you an extra copay. But asking your doctor who else you could consult for a diagnosis is a good idea—especially if you’re considering surgery or side-effect-heavy drugs.',
		},
		{
			ques: 'What questions haven’t I asked that I should have?',
			answer: 'I just heard this question from a patient last week, and I thought it was incredibly helpful, Dr. Boissy says. She and her patient had covered “all the nuts and bolts” and technical aspects of his upcoming treatment schedule. But they hadn’t discussed the emotional impact the treatment would have on him. “That’s probably the most important side of things, and I might have forgotten to go through that with him if he hadn’t asked,” she says.',
		},
		{
			ques: 'Do I need a referral from my Primary Care Physician to see a specialist?',
			answer: 'As your primary care physician and care taker, we prefer you come and see your primary care physician before seeing a specialist. Your physician will determine whether you need to be seen by a specialist due to your medical condition. If you need a referral or authorization, your doctor will coordinate with our internal referral staff members, based on your health plan requirements.',
		},
		{
			ques: 'Why is having a primary care physician so important?',
			answer: 'Choosing a primary care doctor is a great way to maintain exceptional health throughout the course of your life. In addition to treating acute illnesses, your primary care physician can partner with you to meet your long term health goals and needs. Patient and Physician relationship can translate into continued health and enhanced quality of life.',
		},
	];

	return (
		<div className='container mx-auto py-10 lg:py-20'>
			{/* title */}
			<div className='container mx-auto flex justify-between items-center text-main pb-10 lg:pb-20'>
				<div className='space-y-2'>
					<h2 className='text-2xl lg:text-4xl xl:text-5xl font-lora'>
						Browse Questions.
					</h2>
					<p>
						Look for those answers for which you get confused often.
					</p>
				</div>
				<div className='hidden z-100 text-main lg:block bg-white p-5 rounded-br-3xl relative'>
					<p>We have answered as you asked</p>
					<h3 className='text2xl xl:text-3xl text-primary'>
						<span className='text-3xl xl:text-4xl font-medium mr-2'>
							100+
						</span>
						answers
					</h3>
					<p className='absolute text-gray-200 -top-4 -left-16'>
						<LiveHelpIcon sx={{ fontSize: 80 }} />
					</p>
				</div>
			</div>
			{/* content */}
			<div className='grid lg:grid-cols-12 gap-8'>
				<div className='lg:col-span-7 space-y-2'>
					{faqList.map((question, index) => (
						<Accordion
							key={index}
							sx={{
								boxShadow: 'none',
								border: '1px solid lightgray',
								borderRadius: '10px',
								minHeight: '100px',
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
									{question?.ques}
								</h2>
							</AccordionSummary>
							<AccordionDetails>
								<div className='py-2 text-gray-500'>
									{question?.answer}
								</div>
							</AccordionDetails>
						</Accordion>
					))}
				</div>
				<div className='lg:col-span-5 border p-4 rounded'>
					<div className='border p-4 space-y-2 rounded'>
						<h4 className='text-main text-2xl text-center'>
							Have Questions In Mind?
						</h4>
						<p className='text-gray-500 text-center'>
							Let us help you.
						</p>
						<TextField
							id='standard-multiline-static'
							label='Write your question here!'
							multiline
							rows={4}
							variant='standard'
							sx={{ width: '100%', mt: 2 }}
						/>
						<BtnPrimary
							size='large'
							sx={{ background: '#0E63F4', width: '100%' }}
						>
							Submit
						</BtnPrimary>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Faqs;
