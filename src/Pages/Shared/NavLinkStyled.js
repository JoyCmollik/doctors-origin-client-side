import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinkStyled = ({ children, ...rest }) => {
	return (
		<NavLink
			className='px-2 py-1 rounded hover:bg-gray-100 focus:scale-0 transition ease-in duration-100'
			activeClassName='text-primary'
			{...rest}
		>
			{children}
		</NavLink>
	);
};

export default NavLinkStyled;
