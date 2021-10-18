import { Button } from '@mui/material';
import React from 'react';

const BtnPrimary = ({ children, endIcon, ...rest }) => {
	return (
		<>
			<Button
				sx={{ background: '#0E63F4' }}
				variant='contained'
				endIcon={endIcon ? endIcon : ''}
			>
				<span className='font-poppins'>{children}</span>
			</Button>
		</>
	);
};

export default BtnPrimary;
