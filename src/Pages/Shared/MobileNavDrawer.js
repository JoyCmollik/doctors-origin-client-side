import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import NavLinkStyled from './NavLinkStyled';
import { NavHashLink } from 'react-router-hash-link';
import CloseIcon from '@mui/icons-material/Close';

const MobileNavDrawer = () => {
	const anchor = true;
	const [state, setState] = useState({
		left: false,
	});

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return;
		}

		setState({ [anchor]: open });
	};

	const navLinks = [
		<NavLinkStyled to='/home'>Home</NavLinkStyled>,
		<NavHashLink
			className='px-2 py-1 rounded hover:bg-gray-100 focus:scale-0 transition ease-in duration-100'
			to='/home#doctors'
		>
			Doctors
		</NavHashLink>,
		<NavLinkStyled to='/locations'>Locations</NavLinkStyled>,
		<NavLinkStyled to='/faqs'>Faqs</NavLinkStyled>,
	];

	const list = (anchor) => (
		<div className='bg-main h-screen text-light w-40 relative p-2 pt-20'>
			<button
				className='ml-auto bg-red-400 p-1 absolute rounded top-1 right-1'
				onClick={toggleDrawer(anchor, false)}
			>
				<CloseIcon />
			</button>

			<div
				class='p-2 space-y-2 bg-light rounded'
				onClick={toggleDrawer(anchor, false)}
				onKeyDown={toggleDrawer(anchor, false)}
			>
				{navLinks.map((link, index) => (
					<div
						class='w-full bg-main rounded py-2 text-center hover:bg-light hover:text-dark'
						key={index}
					>
						{link}
					</div>
				))}
			</div>
		</div>
	);
	return (
		<div>
			<Button onClick={toggleDrawer(anchor, true)}>{<MenuIcon />}</Button>
			<Drawer open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
				{list(anchor)}
			</Drawer>
		</div>
	);
};

export default MobileNavDrawer;
