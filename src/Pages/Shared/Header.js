import React from 'react';
import { Link } from 'react-router-dom';
import BtnPrimary from './BtnPrimary';
import MobileNavDrawer from './MobileNavDrawer';
import LoginIcon from '@mui/icons-material/Login';
import NavLinkStyled from './NavLinkStyled';

const Header = () => {
	return (
		<header className='bg-secondary py-4'>
			<div className='container mx-auto flex justify-between items-center'>
				<div className='md:hidden'>
					<MobileNavDrawer />
				</div>
				<Link to='/'>
					<h4 className='text-2xl font-lora'>
						Doctors<span className='text-primary'>Portal</span>
					</h4>
				</Link>
				<div className='hidden md:flex items-center space-x-4'>
					<NavLinkStyled to='/home'>Home</NavLinkStyled>
					<NavLinkStyled to='/about'>About us</NavLinkStyled>
					<NavLinkStyled to='/services'>Services</NavLinkStyled>
					<NavLinkStyled to='/blogs'>Blogs</NavLinkStyled>
					<NavLinkStyled to='/contact'>Contact</NavLinkStyled>
				</div>
				<div className=''>
					<Link to='/login'>
						<BtnPrimary endIcon={<LoginIcon />}>Log in</BtnPrimary>
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Header;
