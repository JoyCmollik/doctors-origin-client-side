import React from 'react';
import { Link } from 'react-router-dom';
import BtnPrimary from './BtnPrimary';
import MobileNavDrawer from './MobileNavDrawer';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import NavLinkStyled from './NavLinkStyled';
import useAuth from '../../hooks/useAuth';
import { NavHashLink } from 'react-router-hash-link';

const Header = () => {
	const { user, handleSignOut } = useAuth();

	return (
		<header
			className='bg-light py-4 fixed w-full'
			style={{ zIndex: '99999999999' }}
		>
			<div className='container px-1 md:px-0 mx-auto flex justify-between items-center'>
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
					<NavHashLink
						className='px-2 py-1 rounded hover:bg-gray-100 focus:scale-0 transition ease-in duration-100'
						to='/home#doctors'
					>
						Doctors
					</NavHashLink>
					<NavLinkStyled to='/locations'>Locations</NavLinkStyled>
					<NavLinkStyled to='/faqs'>Faqs</NavLinkStyled>
				</div>
				<div className=''>
					{!user.email ? (
						<Link to='/login'>
							<BtnPrimary endIcon={<LoginIcon />}>
								Sign in
							</BtnPrimary>
						</Link>
					) : (
						<div className='flex items-center space-x-2'>
							<p className='text-main'>{user?.displayName}</p>
							<BtnPrimary
								onClick={handleSignOut}
								endIcon={<LogoutIcon />}
							>
								Sign out
							</BtnPrimary>
						</div>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
