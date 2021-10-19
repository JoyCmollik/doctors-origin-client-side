import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Login = () => {
	const { user, googleSignIn, handleSignOut, isLoading, setIsLoading } =
		useAuth();
	const location = useLocation();
	const history = useHistory();
	const URI = location?.from?.pathname || '/home';

	const handleGoogleSignIn = () => {
		setIsLoading(true);
		googleSignIn()
			.then((result) => {
				history.push(URI);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	return (
		<div>
			{user && user.displayName}
			{!user.email ? (
				<button
					className='bg-primary'
					disabled={isLoading}
					onClick={handleGoogleSignIn}
				>
					Sign In Using Google
				</button>
			) : (
				<button onClick={handleSignOut}>Sign Out</button>
			)}
		</div>
	);
};

export default Login;
