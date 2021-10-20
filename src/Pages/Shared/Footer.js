import React from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
	const linkList = [
		{
			category: 'features',
			links: [
				{ to: '/home', text: 'Live chat' },
				{ to: '/home', text: 'Email marketing' },
				{ to: '/home', text: 'User analytics' },
				{ to: '/home', text: 'Marketing Automation' },
			],
		},
		{
			category: 'Resources',
			links: [
				{ to: '/home', text: 'Watch a demo' },
				{ to: '/home', text: 'Docs' },
				{ to: '/home', text: 'Integrations & API' },
				{ to: '/home', text: 'iOS and Android Apps' },
			],
		},
		{
			category: 'Company',
			links: [
				{ to: '/home', text: 'About' },
				{ to: '/home', text: 'Patients' },
				{ to: '/home', text: 'Careers' },
				{ to: '/home', text: 'Contact Us' },
			],
		},
	];

	// local components
	const FooterNav = (props) => {
		const { category, links } = props.list;
		return (
			<div className='lg:w-1/4 md:w-1/2 w-full px-4'>
				<h2 className='uppercase title-font font-medium text-gray-100 tracking-widest text-sm mb-3'>
					{category}
				</h2>
				<nav className='list-none mb-10'>
					{links.map((link, index) => (
						<FooterNavLink key={index} link={link} />
					))}
				</nav>
			</div>
		);
	};

	const FooterNavLink = (props) => {
		const { to, text } = props.link;

		return (
			<li>
				<Link to={to} className='text-gray-400 hover:text-light'>
					{text}
				</Link>
			</li>
		);
	};

	return (
		<footer className='text-gray-400 body-font bg-black'>
			<div className='container px-5 py-24 mx-auto'>
				<div className='flex flex-wrap md:text-left text-center order-first'>
					{linkList.map((list, index) => (
						<FooterNav key={index} list={list} />
					))}
					<div className='lg:w-1/4 md:w-1/2 w-full px-4'>
						<h2 className='title-font font-medium text-gray-100 tracking-widest text-sm mb-3'>
							SUBSCRIBE
						</h2>
						<div className='flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start'>
							<div className='relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2'>
								<label
									htmlFor='footer-field'
									className='leading-7 text-sm text-gray-400'
								>
									Typer you email here
								</label>
								<input
									type='text'
									id='footer-field'
									name='footer-field'
									className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
								/>
							</div>
							<button className='uppercase  font-medium lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-main rounded'>
								Submit
							</button>
						</div>
						<p className='text-gray-200 text-sm mt-2 md:text-left text-center'>
							Please provide your email
							<br className='lg:block hidden' />
							if you want to get regular updates
						</p>
					</div>
				</div>
			</div>
			<div className='bg-gray-700'>
				<div className='container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col'>
					<Link
						to='/home'
						className='flex title-font font-medium items-center md:justify-start justify-center text-gray-100'
					>
						<span className='ml-3 text-xl'>DoctorsPortal</span>
					</Link>
					<p className='text-sm text-gray-200 sm:ml-6 sm:mt-0 mt-4'>
						Let us serve you
					</p>
					<span className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start'>
						<Link to='/home' className='text-gray-200'>
							<FacebookIcon />
						</Link>
						<Link to='/home' className='ml-3 text-gray-200'>
							<TwitterIcon />
						</Link>
						<Link to='/home' className='ml-3 text-gray-200'>
							<InstagramIcon />
						</Link>
						<Link to='/home' className='ml-3 text-gray-200'>
							<LinkedInIcon />
						</Link>
					</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
