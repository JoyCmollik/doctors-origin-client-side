import React from 'react';
import { Link } from 'react-router-dom';
import BtnPrimary from './BtnPrimary';
import MobileNavDrawer from './MobileNavDrawer';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import NavLinkStyled from './NavLinkStyled';
import useAuth from '../../hooks/useAuth';
import { NavHashLink } from 'react-router-hash-link';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

const Header = () => {
	const { user, handleSignOut } = useAuth();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<header className='bg-light py-4 fixed w-full' style={{ zIndex: '99' }}>
			<div className='container px-1 md:px-0 mx-auto flex justify-between items-center'>
				<div className='md:hidden'>
					<MobileNavDrawer />
				</div>
				<Link to='/'>
					<h4 className='text-lg md:text-2xl font-lora'>
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
						<div className='bg-white rounded px-2'>
							<Box sx={{ display: 'flex', alignItems: 'center' }}>
								<p className='text-main capitalize mr-0'>
									{user?.displayName.split(' ', 1)}
								</p>
								<Tooltip title='Account settings'>
									<IconButton
										onClick={handleClick}
										size='small'
										sx={{ ml: 2 }}
									>
										<Avatar
											src={
												user.photoURL
													? user.photoURL
													: ''
											}
											sx={{ width: 32, height: 32 }}
										></Avatar>
									</IconButton>
								</Tooltip>
							</Box>
							<Menu
								anchorEl={anchorEl}
								open={open}
								onClose={handleClose}
								onClick={handleClose}
								PaperProps={{
									elevation: 0,
									sx: {
										overflow: 'visible',
										filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
										mt: 1.5,
										'& .MuiAvatar-root': {
											width: 32,
											height: 32,
											ml: -0.5,
											mr: 1,
										},
										'&:before': {
											content: '""',
											display: 'block',
											position: 'absolute',
											top: 0,
											right: 14,
											width: 10,
											height: 10,
											bgcolor: 'background.paper',
											transform:
												'translateY(-50%) rotate(45deg)',
											zIndex: 0,
										},
									},
								}}
								transformOrigin={{
									horizontal: 'right',
									vertical: 'top',
								}}
								anchorOrigin={{
									horizontal: 'right',
									vertical: 'bottom',
								}}
							>
								<MenuItem>
									<Avatar
										src={user.photoURL ? user.photoURL : ''}
									/>{' '}
									Profile
								</MenuItem>
								<Divider />
								<MenuItem>
									<ListItemIcon>
										<PersonAdd fontSize='small' />
									</ListItemIcon>
									Add another account
								</MenuItem>
								<MenuItem>
									<ListItemIcon>
										<Settings fontSize='small' />
									</ListItemIcon>
									Settings
								</MenuItem>
								<MenuItem
									sx={{ width: '100%' }}
									as='button'
									onClick={handleSignOut}
								>
									<ListItemIcon>
										<Logout fontSize='small' />
									</ListItemIcon>
									Logout
								</MenuItem>
							</Menu>
						</div>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
