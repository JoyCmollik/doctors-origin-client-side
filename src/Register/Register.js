import { Google } from '@mui/icons-material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Register = () => {
	const {
		handleEmailRegister,
		handleUpdateUserProfile,
		googleSignIn,
		isLoading,
		setIsLoading,
		error,
		setError,
	} = useAuth();
	const location = useLocation();
	const history = useHistory();
	const URI = location?.from?.pathname || '/home';
	const { register, handleSubmit } = useForm();

	const onSubmit = ({ name, email, password }) => {
		setIsLoading(true);
		handleEmailRegister(email, password)
			.then((result) => {
				setError('');
				handleUpdateUserProfile(name);
				history.push(URI);
			})
			.catch((error) => {
				setError(error);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	// sign in with google
	const handleGoogleSignIn = () => {
		setIsLoading(true);
		googleSignIn()
			.then((result) => {
				setError('');
				history.push(URI);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	return (
		<div className='bg-main'>
			<div
				className='container h-full mx-auto flex justify-center items-center'
				style={{ minHeight: '70vh' }}
			>
				<div
					className='space-y-4 text-main w-full text-center'
					style={{ maxWidth: '500px' }}
				>
					<h4 className='text-2xl text-light'>
						Please Register Yourself Here
					</h4>
					<form
						className='flex flex-col space-y-2 md:bg-white p-4 rounded mx-auto'
						onSubmit={handleSubmit(onSubmit)}
					>
						<input
							className='bg-white text-gray-400 focus-within:text-main p-4 w-full border rounded'
							placeholder='write your name here'
							{...register('name')}
						/>
						<input
							className='bg-white text-gray-400 focus-within:text-main p-4 w-full border rounded'
							placeholder='example@email.com'
							type='email'
							{...register('email')}
						/>
						<input
							className='bg-white text-gray-400 focus-within:text-main p-4 w-full border rounded'
							placeholder='your password'
							type='password'
							{...register('password')}
						/>
						<input
							className='bg-primary text-white p-4 w-full border-0 outline-none rounded cursor-pointer transform hover:scale-95 transition duration-100'
							type='submit'
							value='Register'
							disabled={isLoading}
						/>
					</form>
					<div className='px-4 space-y-4'>
						<p className='text-white'>
							Already is an user?
							<Link to='/login'>
								<span className='text-light ml-2'>
									Login Now
								</span>
							</Link>
						</p>
						<p className='text-light'>or</p>
						<button
							className='text-white p-4 w-full text-left border-0 outline-none rounded cursor-pointer transform hover:scale-95 transition duration-100 flex'
							style={{ background: '#DC4E41' }}
							onClick={handleGoogleSignIn}
							disabled={isLoading}
						>
							<span>
								<Google />
							</span>
							<span className='text-center w-full'>
								Login with Google
							</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
