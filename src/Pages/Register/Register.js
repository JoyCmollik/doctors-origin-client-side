import React from 'react';
import { Google } from '@mui/icons-material';
import Alert from '@mui/material/Alert';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

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
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

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
						<div className='space-y-1'>
							<input
								className='bg-white text-gray-400 focus-within:text-main p-4 w-full border rounded'
								placeholder='write your name here'
								{...register('name', { required: true })}
							/>
							{errors.name && (
								<Alert severity='error'>name is required</Alert>
							)}
						</div>
						<div className='space-y-1'>
							<input
								className='bg-white text-gray-400 focus-within:text-main p-4 w-full border rounded'
								placeholder='example@email.com'
								type='email'
								{...register('email', { required: true })}
							/>
							{errors.email && (
								<Alert severity='error'>
									email is required
								</Alert>
							)}
						</div>
						<div className='space-y-1'>
							<input
								className='bg-white text-gray-400 focus-within:text-main p-4 w-full border rounded'
								placeholder='your password'
								type='password'
								{...register('password', {
									required: true,
									pattern:
										/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
								})}
							/>
							{errors.password &&
								(errors.password?.type === 'required' ? (
									<Alert severity='error'>
										password is required
									</Alert>
								) : (
									<Alert severity='error'>
										Password must contain eight characters
										including at least one number and
										character
									</Alert>
								))}
						</div>
						<input
							className='bg-primary text-white p-4 w-full border-0 outline-none rounded cursor-pointer transform hover:scale-95 transition duration-100'
							type='submit'
							value='Register'
							disabled={isLoading}
						/>
					</form>
					<div className='space-y-4'>
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
