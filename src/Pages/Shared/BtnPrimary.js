import { Button } from '@mui/material';
import React from 'react';

const BtnPrimary = ({ children, endIcon, ...rest }) => {
	return (
		<>
			<Button
				sx={{ background: '#0E63F4' }}
				variant='contained'
				endIcon={endIcon ? endIcon : ''}
				{...rest}
			>
				<span className='font-poppins'>{children}</span>
			</Button>
		</>
	);
};

export default BtnPrimary;
