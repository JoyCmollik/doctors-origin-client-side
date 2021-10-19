import React from 'react';
import useAuth from '../../hooks/useAuth';
import { Redirect, Route } from 'react-router';
import { Backdrop } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

const PrivateRoute = ({ children, ...rest }) => {
	const { user, isLoading } = useAuth();
	if (isLoading) {
		return (
			<Backdrop
				sx={{
					color: '#fff',
					zIndex: (theme) => theme.zIndex.drawer + 1,
				}}
				open={true}
			>
				<CircularProgress color='inherit' />
			</Backdrop>
		);
	}

	return (
		<Route
			{...rest}
			render={({ location }) =>
				user.email ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/login',
							from: location,
						}}
					/>
				)
			}
		></Route>
	);
};

export default PrivateRoute;
